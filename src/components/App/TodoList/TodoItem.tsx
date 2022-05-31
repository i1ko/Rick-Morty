import React from 'react';
import {useDispatch} from "react-redux";
import {AnyAction} from "@reduxjs/toolkit";
import {Button} from "react-bootstrap";

import {TodoItemI} from "./TodoListI";

export const TodoItem = ({todo, index, markTodo, removeTodo}: { todo: TodoItemI, markTodo: (arg0: number) => AnyAction, index: number, removeTodo: (arg0: number) => AnyAction }) => {

    const dispatch = useDispatch()
    const markTodoDispatch = () => dispatch(markTodo(index))
    const removeTodoDispatch = () => dispatch(removeTodo(index))

    return (
        <div className="todo">
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
            <div>
                <Button variant="outline-success"
                        onClick={markTodoDispatch}
                >
                    ✓
                </Button>
                {' '}
                <Button variant="outline-danger"
                        onClick={removeTodoDispatch}
                >
                    ✕
                </Button>
            </div>
        </div>
    )
}