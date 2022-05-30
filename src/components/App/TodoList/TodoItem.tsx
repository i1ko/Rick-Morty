import React from 'react';
import {Button} from "react-bootstrap";

import {TodoItemI} from "./TodoListI";

export const TodoItem = ({todo, index, markTodo, removeTodo}: { todo: TodoItemI, markTodo: any, index: number, removeTodo: any }) => {

    return (
        <div className="todo">
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
            <div>
                <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
                <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
            </div>
        </div>
    )
}