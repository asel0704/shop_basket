import {Button, TextField} from "@mui/material";
import {useCallback, useMemo, useState} from "react";


export function TodoForm({ onCreate }) {
    const [text, setText] = useState('')
    const handleCreate = useCallback((e) => {
        e.preventDefault()
        onCreate({
            text,
            created: new Date(),
            done: false,
        })
        setText('')
    }, [onCreate, text])
    const isDisabled = useMemo(() => {
        return text.trim().length === 0
    }, [text])


    return (
        <form onSubmit={handleCreate}>
            <TextField label="Name" value={text} onChange={(e) => setText(e.target.value)}  />
            <Button disabled={isDisabled} type="submit">Create</Button>
        </form>
    )
}
