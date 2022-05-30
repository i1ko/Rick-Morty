import React, {useState} from 'react';
import {Card} from "react-bootstrap";

import {TodoItemI} from "./TodoListI";
import {TodoItem} from "./TodoItem";
import {FormTodo} from "./FormTodo";

export const TodoList = () => {

    const [todos, setTodos] = useState<TodoItemI[]>([
        {
            id: 0,
            text: "This is a sampe todo 1",
            description: "",
            isDone: false
        },
        {
            id: 1,
            text: "This is a sampe todo 2",
            description: "",
            isDone: true
        },
    ]);

    const addTodo = (todo: TodoItemI) => {
        const todoConfig = {...todo, }
        const newTodos = [...todos, { todo }];
        setTodos(newTodos as TodoItemI[]);
    };
    const markTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
    };
    const removeTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className={"container"}>
            <div className="app">
                <div className="container">
                    <h1 className="text-center mb-4">Todo List</h1>
                    <div>
                        {todos.map((todo, index) => {
                            console.log(todo);
                            return (
                                todo.text
                                    ?
                                    <Card>
                                        <Card.Body>
                                            {/* trouble here !*/}
                                            <TodoItem
                                                key={todo.id}
                                                // index={index}
                                                todo={todo}
                                                markTodo={markTodo}
                                                removeTodo={removeTodo}
                                            />
                                        </Card.Body>
                                    </Card>
                                    : <p>Error</p>
                            );
                        })}
                    </div>
                </div>
            </div>
            <FormTodo addTodo={addTodo} />
        </div>
    )
}