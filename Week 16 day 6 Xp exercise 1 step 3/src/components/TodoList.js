import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem'; // Import the TodoItem component

const TodoList = () => {
  // Access todos from the Redux store
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
