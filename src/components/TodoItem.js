import {Button, Checkbox, styled} from "@mui/material";
import {useCallback, useMemo} from "react";
import {useDispatch} from "react-redux";


const Title = styled('span')`
    text-decoration: ${(props) => props.done ? 'line-through' : 'none' };
`
export function TodoItem({ todo, onTodoChange }) {
    const dispatch = useDispatch()
    const created = useMemo(() => {
        return new Date(todo.created).toLocaleTimeString()
    }, [todo.created])

    const handleRemoveClick = useCallback(() => {
        dispatch({ type: 'todos/remove', payload: todo.created })
    }, [todo.created, dispatch])

    return (
        <li>
            <Checkbox checked={todo.done} onChange={() => onTodoChange(todo.created, !todo.done)}/>
            <Title done={todo.done}>{todo.text}</Title>
            <br/>
            {created}
            <Button size="small" onClick={handleRemoveClick}>Delete</Button>
        </li>
    )
}
