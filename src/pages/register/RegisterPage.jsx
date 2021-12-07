import styles from '../../styles/SignupAndRegist.module.css';
import { useState } from 'react';
import Toast from '../../components/toast/Toast';
import { showToast } from '../../components/toast/Toast';

function RegiserPage() {
  const [userRegistInput, setUserRegistInput] = useState({
    username: '',
    password: '',
    ensurement: ''
  });

  function handleRegistInput(e, inputType) {
    // console.log(e.target.value, inputType);
    setUserRegistInput({ ...userRegistInput, [inputType]: e.target.value });
  }

  // function showToast(message) {
  //   if (message) {
  //     return <Toast toastMessage={message} />;
  //   } else {
  //     return null;
  //   }
  // }

  const handleRegist = async (e) => {
    e.preventDefault();
    try {
      const { username, password, ensurement } = userRegistInput;
      if (!username || !password) {
        showToast('用户名和密码不能为空！');
        // alert('用户名和密码不能为空！');
        return;
      } else if (!/^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){4,19}$/.test(username)) {
        showToast('请输入5-20位用户名，以字母开头，可包含数字与下划线');
        return;
      } else if (password !== ensurement) {
        showToast('两次输入的密码不一致！');
        return;
      }
      showToast('注册成功');
    } catch (e) {}
  };

  return (
    <>
      <h1 className={styles['firstPage-title']}>Task-APP</h1>
      <h2 className={styles['firstPage-header']}>Please Regist</h2>
      <form className={styles['firstPage-form']} onSubmit={handleRegist}>
        <input
          className={styles['firstPage-input']}
          type="text"
          // required="required"
          value={userRegistInput.username}
          onChange={(e) => handleRegistInput(e, 'username')}
          placeholder="请输入用户名"
        />
        <input
          className={`${styles['firstPage-input']} ${styles['firstPage-password']}`}
          type="text"
          // required="required"
          value={userRegistInput.password}
          onChange={(e) => handleRegistInput(e, 'password')}
          placeholder="请输入密码"
        />
        <input
          className={`${styles['firstPage-input']} ${styles['firstPage-password']}`}
          type="text"
          // required="required"
          value={userRegistInput.ensurement}
          onChange={(e) => handleRegistInput(e, 'ensurement')}
          placeholder="请确认密码"
        />
        <button className={styles['firstPage-button']}>注 册</button>
        <a href="/" className={styles['firstPage-SignupRegsitSwitch']}>
          已有账号？
        </a>
      </form>
      <Toast />
    </>
  );
}

export default RegiserPage;
