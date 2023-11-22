import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from './Alert';
import { clearTodo, removeTodo, searchTodo, todoAction, updateTodo } from '../redux/action/todoAction';
import { alertAction } from '../redux/action/alertAction';

const TodoList = () => {
    const state = useSelector((store) => store.todoReducer);
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(searchTodo(e.target.value));
    };

    const handleRemove = (todoId) => {
        dispatch({
            type: alertAction.SET_ALERT,
            payload: {
                type: 'danger',
                message: 'Todo deleted successfully!',
            },
        });

        dispatch(removeTodo(todoId));

    };

    const handleClear = (list) => {
        dispatch({
            type: alertAction.SET_ALERT,
            payload: {
                type: 'danger',
                message: 'All todo deleted successfully!',
            },
        });
        dispatch(clearTodo(list));
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
                <h5 className="card-title">
                    Todo List
                    <a href="#" onClick={handleClear}>Clear List</a>
                </h5>
                <form className="list-search">
                    <input
                        type="text"
                        placeholder="Search todo"
                        onChange={handleSearch}
                    />
                </form>

                <ul className="list-group">
                    {filteredTodos.map((todo) => (
                        <li className="list-group-item" key={todo.id}>
                            <span
                                onClick={() => handleUpdate(todo.id)}
                                style={{
                                    textDecoration: todo.is_done ? 'line-through' : 'none',
                                }}
                            >
                                {todo.text}
                            </span>
                            <div className="remove" onClick={() => handleRemove(todo.id)}>
                                <i className="fa fa-remove"></i>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    );
};

export default TodoList;
