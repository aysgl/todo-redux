// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import switchSlice from './switchSlice';
import alertSlice from './alertSlice';

const store = configureStore({
    reducer: {
        todos: todoReducer,
        switch: switchSlice,
        alert: alertSlice
    },
});

export default store;
