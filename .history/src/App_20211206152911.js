import './App.css';
// import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import NotFoundPage from './pages/NotFoundPages';
import LoginPage from './pages/login/LoginPage';
import RegiserPage from './pages/register/RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="todo-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>

      {/* <TodoList /> */}
    </div>
  );
}

export default App;