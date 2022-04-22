const initState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
}

export const todos = function (state = initState, action) {
    const newState = { ...state }
    switch (action.type) {
        case 'todos/add':
            newState.todos = [...state.todos, action.payload]
            break;
        case 'todos/remove':
            newState.todos = state.todos.filter((todo) => todo.created !== action.payload)
            break;
        case 'todos/doneChange':
            newState.todos =  state.todos.map((todo) => {
                if (todo.created === action.payload) {
                    return {
                        ...todo,
                        done: action.value
                    }
                }
                return todo
            })
            break;
        default:
            return state
    }
    localStorage.setItem('todos', JSON.stringify(newState.todos))
    return newState
}
