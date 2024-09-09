import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todoSlice'; // Import the actions

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch(); // Get dispatch function

  // Handle toggling the todo's completion status
  const handleToggle = () => {
    dispatch(toggleTodo({ id: todo.id })); // Dispatch toggleTodo action
  };

  // Handle removing the todo
  const handleRemove = () => {
    dispatch(removeTodo({ id: todo.id })); // Dispatch removeTodo action
  };

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={handleToggle} // Toggle completion status on click
      >
        {todo.text}
      </span>
      <button onClick={handleRemove}>Delete</button> {/* Remove todo */}
    </li>
  );
};

export default TodoItem;
