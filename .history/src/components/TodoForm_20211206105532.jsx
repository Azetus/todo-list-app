import React, { useState, useEffect, useRef } from 'react';
// import {
//   addTodoActionCreator,
//   updateTodoActionCreator
// } from '../redux/listState/listActions';
import { useDispatch } from 'react-redux';
import { ADD_TODO, UPDATE_TODO } from '../redux/listState/slice';


function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input || /^\s*$/.test(input)) {
      return;
    }
    if (props.edit) {
      dispatch(UPDATE_TODO(props.edit.id, input));
      props.onSubmit();
    } else {
      dispatch(
        ADD_TODO({
          id: Math.floor(Math.random() * 10000),
          text: input,
          isComplete: false
        })
      );
    }

    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="请更新计划"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">更新</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="请输入计划"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">添加</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
