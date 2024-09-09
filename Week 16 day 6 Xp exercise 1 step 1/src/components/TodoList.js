import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from 'c:/Users/jonat/OneDrive/Desktop/Week 16 day 6 Xp exercise 1/src/Features/todoSlice/features/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => dispatch(toggleTodo({ id: todo.id }))}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
