import React, {useCallback} from 'react'
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {useDispatch, useSelector} from "react-redux";

export function TodoPage() {
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()

    const handleCreate = useCallback((todo) => {
        dispatch({ type: 'todos/add', payload: todo })
    }, [dispatch])

    const handleTodoChanged = useCallback((created, value) => {
        dispatch({
            type: 'todos/doneChange',
            payload: created,
            value,
            xxx: 'WQWEQWE'
        })
    }, [dispatch])

    return (
        <div>
            <TodoForm onCreate={handleCreate} />
            <TodoList todos={todos} onTodoChange={handleTodoChanged} />
        </div>
    )
}
