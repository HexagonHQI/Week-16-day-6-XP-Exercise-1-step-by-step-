import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  todos: []
};

// Create the slice
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(), // Unique ID for each todo
        text: action.payload.text,
        completed: false
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    }
  }
});

// Export actions
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
