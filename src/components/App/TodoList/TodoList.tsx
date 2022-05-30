import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import { v4 as uuid } from "uuid";

import {TodoItemI} from "./TodoListI";
import {TodoItem} from "./TodoItem";
import {FormTodo} from "./FormTodo";

export const TodoList = () => {
    const localStorageTodos = JSON.parse(localStorage.getItem('todos') || '[]')
    const [todos, setTodos] = useState<TodoItemI[]>(() => {
        return localStorageTodos.length
            ? localStorageTodos
            : [{
                id: uuid(),
                text: "This is a sampe todo because your task list is empty",
                isDone: false
            }]
    });

    const addTodo = (text: string) => {
        const todoId = uuid()
        const todoConfig = {text: text, id: todoId, isDone: false}
        const newTodos = [...todos, todoConfig]
        setTodos(newTodos as TodoItemI[])
        const todosForLocalStorage = JSON.stringify(newTodos)
        localStorage.setItem('todos',todosForLocalStorage)
    };
    const markTodo = (index: number) => {
        const newTodos = [...todos]
        newTodos[index].isDone = !(newTodos[index].isDone)
        setTodos(newTodos)
        const todosForLocalStorage = JSON.stringify(newTodos)
        localStorage.setItem('todos',todosForLocalStorage)
    };
    const removeTodo = (index: number) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
        const todosForLocalStorage = JSON.stringify(newTodos)
        newTodos.length ? localStorage.setItem('todos',todosForLocalStorage) : localStorage.removeItem('todos')
    };

    return (
        <div className={"container"}>
            <div className="app">
                <div className="container">
                    <h1 className="text-white text-center pt-2 mb-4">Todo List</h1>
                    <div>
                        {todos.map((todo, index) => {
                            return (
                                todo.text
                                    ?
                                    <Card>
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
            <FormTodo addTodo={addTodo} />
        </div>
    )
}