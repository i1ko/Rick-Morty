import React from 'react';
import {Button} from "react-bootstrap";

import {TodoItemI} from "./TodoListI";
import {useAppDispatch} from "../../../redux/hooks";
import {todoSlice} from "../../../redux/reducers/reducerTodos";

export const TodoItem = ({todo, index}: { todo: TodoItemI, index: number}) => {

    const dispatch = useAppDispatch()
    const {markTodo, removeTodo} = todoSlice.actions;

    return (
        <div className="todo">
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
            <div>
                <Button variant="outline-success"
                        onClick={() => dispatch(markTodo(index))}
                >
                    ✓
                </Button>
                {' '}
                <Button variant="outline-danger"
                        onClick={() => dispatch(removeTodo(index))}
                >
                    ✕
                </Button>
            </div>
        </div>
    )
}