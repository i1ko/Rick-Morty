import React from 'react';
import {Card} from "react-bootstrap";

import {TodoItemI} from "./TodoListI";
import {TodoItem} from "./TodoItem";
import {FormTodo} from "./FormTodo";
import {useAppSelector} from "../../../redux/hooks";

export const TodoList = () => {
    const {todoList} = useAppSelector(state => state.reducerTodos)

    return (
        <div className={"container"}>
            <div className="app">
                <div className="container">
                    <h1 className="text-white text-center pt-2 mb-4">Todo List</h1>
                    <div>
                        {todoList && todoList.length
                            && todoList.map((todo: TodoItemI, index: number) => {
                            return (
                                todo.text
                                    ?
                                    <Card key={index} className={'my-2'}>
                                        <Card.Body>
                                            <TodoItem
                                                key={index}
                                                index={index}
                                                todo={todo}
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