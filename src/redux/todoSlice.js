import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        searchTodo: ''
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos = state.todos.concat(action.payload);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, is_done: !todo.is_done } : todo
            );
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        searchTodo: (state, action) => {
            state.searchTodo = action.payload;
        },
        clearTodo: (state) => {
            state.todos = [];
        },
    },
});

export const { addTodo, removeTodo, updateTodo, searchTodo, clearTodo } = todoSlice.actions;

export default todoSlice.reducer;
