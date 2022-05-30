import React from 'react';
import {Button, Form} from "react-bootstrap";

// TODO: any type
export const FormTodo = ({ addTodo }: {addTodo: any}) => {
    const [value, setValue] = React.useState("");

    const handleSubmit = (e: any) => {
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
                                  console.log(e);
                              }}
                              placeholder="Add new todo" />
            </Form.Group>
            <Button variant="primary mb-3" type="submit">
                Submit
            </Button>
        </Form>
    );
}