import { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine, TiEdit } from 'react-icons';

function Todo() {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  return todos.map((todo, index) => {
    <div
      className={todo.isComplete ? 'todo-row isComplete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine />
        <TiEdit />
      </div>
    </div>;
  });
}

export default Todo;