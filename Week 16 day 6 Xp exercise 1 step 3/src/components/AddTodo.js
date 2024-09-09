import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice'; // Import the addTodo action

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo({ text }));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
