import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todoSlice'; // Import the actions

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  // Handle toggling the todo's completion status
  const handleToggle = () => {
    dispatch(toggleTodo({ id: todo.id }));
  };

  // Handle removing the todo
  const handleRemove = () => {
    dispatch(removeTodo({ id: todo.id }));
  };

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={handleToggle}
      >
        {todo.text}
      </span>
      <button onClick={handleRemove}>Delete</button>
    </li>
  );
};

export default TodoItem;
