import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from './Alert';
import { clearTodo, removeTodo, searchTodo, updateTodo } from '../redux/todoSlice';
import { setAlert } from '../redux/alertSlice';

const TodoList = () => {
    const state = useSelector((store) => store.todos);
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(searchTodo(e.target.value));
    };

    const handleRemove = (todoId) => {
        console.log("handleRemove called with todoId:", todoId);

        dispatch(setAlert({
            type: 'danger',
            message: 'Todo deleted successfully!',
        }));

        dispatch(removeTodo(todoId));
    };

    const handleClear = () => {
        dispatch(setAlert({
            type: 'danger',
            message: 'All todos deleted successfully!',
        }));
        dispatch(clearTodo());
    };

    const handleUpdate = (todoId) => {
        dispatch(updateTodo(todoId));
    };

    const filteredTodos = state.todos.filter((todo) =>
        todo.text.toLowerCase().includes((state.searchTodo || '').toLowerCase())
    );

    return (
        <>
            <Alert type={state.type} message={state.message} />
            <div className={`card ${state.todos.length === 0 ? 'd-none' : ''}`}>
                <div className='card-body p-4'>
                    <h5 className="card-title d-flex justify-content-between">
                        Todo List
                        <a href="#." className='btn btn-link text-warning p-0' onClick={handleClear}>Clear List</a>
                    </h5>
                    <form className="list-search">
                        <input
                            type="text"
                            placeholder="Search todo"
                            className='form-control'
                            onChange={handleSearch}
                        />
                    </form>

                    <ul className="list-group">
                        {filteredTodos.map((todo) => (
                            <li className="list-group-item d-flex justify-content-between px-0 border-0" key={todo.id}>
                                <span
                                    onClick={() => handleUpdate(todo.id)}
                                    style={{
                                        textDecoration: todo.is_done ? 'line-through' : 'none',
                                    }}
                                >
                                    {todo.text}
                                </span>
                                <div className="remove" onClick={() => handleRemove(todo.id)}>
                                    <i className="bi bi-x h4"></i>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TodoList;
