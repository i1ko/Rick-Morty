import React from 'react';
import {Card} from "react-bootstrap";
import {useSelector} from "react-redux";

import * as counterSelectors from "../../../app/selectors";
import * as actionCreators from "../../../app/actionCreators";
import {TodoItemI} from "./TodoListI";
import {TodoItem} from "./TodoItem";
import {FormTodo} from "./FormTodo";

export const TodoList = () => {
    const todos = useSelector(counterSelectors.getTodos)

    const markTodo = (index: number) => actionCreators.markTodo(index)

    const removeTodo = (index: number) => actionCreators.removeTodo(index)

    return (
        <div className={"container"}>
            <div className="app">
                <div className="container">
                    <h1 className="text-white text-center pt-2 mb-4">Todo List</h1>
                    <div>
                        {todos && todos.length
                            && todos.map((todo: TodoItemI, index: number) => {
                            return (
                                todo.text
                                    ?
                                    <Card key={index} className={'my-2'}>
                                        <Card.Body>
                                            <TodoItem
                                                key={index}
                                                index={index}
                                                todo={todo}
                                                markTodo={markTodo}
                                                removeTodo={removeTodo}
                                            />
                                        </Card.Body>
                                    </Card>
                                    : <p className={'text-white'}>Error</p>
                            );
                        })}
                    </div>
                </div>
            </div>
            <FormTodo />
        </div>
    )
}