import React from 'react';
import {Button, Form} from "react-bootstrap";

import {useAppDispatch} from "../../../redux/hooks";
import {todoSlice} from "../../../redux/reducers/reducerTodos";

export const FormTodo = () => {
    const [value, setValue] = React.useState("")
    const dispatch = useAppDispatch()
    const {addTodo} = todoSlice.actions;

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        const textParsed = value.length ? value.trim() : null
        if (!textParsed) return
        dispatch(addTodo(textParsed))
        setValue("")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label className={'text-white'}><b>Add Todo</b></Form.Label>
                <Form.Control type="text" className="input" value={value}
                              onChange={e => {
                                  setValue(e.target.value)
                              }}
                              placeholder="Your todo" />
            </Form.Group>
            <Button variant="primary mb-3" type="submit">
                Add todo
            </Button>
        </Form>
    );
}