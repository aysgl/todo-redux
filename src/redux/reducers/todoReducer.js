import { todoAction } from "../action/todoAction";

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case todoAction.ADD_TODO:
            const addTodo = state.todos.concat(action.payload)
            return { ...state, todos: addTodo }

        case todoAction.REMOVE_TODO:
            const removeTodo = state.todos.filter((todo) => todo.id !== action.payload);
            return { ...state, todos: removeTodo };

        case todoAction.UPDATE_TODO:
            const updateTodo = state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, is_done: !todo.is_done } : todo
            );
            return { ...state, todos: updateTodo };

        case todoAction.SEARCH_TODO:
            return { ...state, searchTodo: action.payload }

        case todoAction.CLEAR_TODO:
            return { ...state, todos: [] }

        default:
            return state;
    }
}

export default todoReducer;