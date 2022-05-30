import React from 'react';
import {Button, Form} from "react-bootstrap";

export const FormTodo = ({ addTodo }: {addTodo: (arg0: string) => void}) => {
    const [value, setValue] = React.useState("");

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

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