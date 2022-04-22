import {TodoItem} from "./TodoItem";
import {useMemo} from "react";

export function TodoList({ todos, onTodoChange }) {
    const sortedTodos = useMemo(() => {
        const s = [...todos]
        return s.sort((a, b) => a.done - b.done)
    }, [todos])
    return (
        <ul>
            {sortedTodos.map((todo) => (
                <TodoItem key={todo.created} todo={todo} onTodoChange={onTodoChange} />
            ))}
        </ul>
    )
}
