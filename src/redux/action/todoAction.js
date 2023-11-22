export const todoAction = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
    SEARCH_TODO: 'SEARCH_TODO',
    CLEAR_TODO: 'CLEAR_TODO'
}

export const addTodo = (payload) => ({
    type: todoAction.ADD_TODO,
    payload
})

export const removeTodo = (payload) => ({
    type: todoAction.REMOVE_TODO,
    payload
})

export const updateTodo = (payload) => ({
    type: todoAction.UPDATE_TODO,
    payload
})

export const searchTodo = (payload) => ({
    type: todoAction.SEARCH_TODO,
    payload
})

export const clearTodo = (payload) => ({
    type: todoAction.CLEAR_TODO,
    payload
})