import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../redux/todoSlice';
import { setAlert } from '../redux/alertSlice';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: uuidv4(),
            text: todoText,
            is_done: false
        };

        dispatch(setAlert({
            type: 'warning',
            message: 'Todo added successfully!'
        }))

        dispatch(addTodo(newTodo));

        setTodoText('');
    };

    return (
        <form className="todo-search" onSubmit={handleSubmit}>
            <input
                className='form-control'
                type="text"
                placeholder="Add list"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button type="submit" disabled={todoText.trim() === ''}>
                <i className="bi bi-plus h1"></i>
            </button>
        </form>
    );
};

export default AddTodo;
