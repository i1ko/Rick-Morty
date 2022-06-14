import {v4 as uuid} from "uuid";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TodoItemI} from "../../components/App/TodoList/TodoListI";

interface TodoState {
    todoList: TodoItemI[]
}

const localStorageTodo = JSON.parse(localStorage.getItem('todoList') || '[]')
const initialState: TodoState = {
    todoList: localStorageTodo.length
        ? localStorageTodo
        : [{
            id: 'test',
            text: "This is a sample todo because your task list is empty",
            isDone: false
        }]
}

export const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addTodo: (todoState, action: PayloadAction<string>) => {
            const text = action.payload
            const todoId = uuid()
            const todoConfig = {text: text, id: todoId, isDone: false}
            const newTodos = [...todoState.todoList, todoConfig]
            const addedTodosForLocalStorage = JSON.stringify(newTodos)
            localStorage.setItem('todoList',addedTodosForLocalStorage)
            todoState.todoList = newTodos;
        },
        markTodo: (todoState, action: PayloadAction<number>) => {
            const index = action.payload;
            const todos = [...todoState.todoList]
            todos[index] = {
                ...todos[index],
                isDone: !(todos[index].isDone)
            }
            const markedTodosForLocalStorage = JSON.stringify(todos)
            localStorage.setItem('todoList',markedTodosForLocalStorage)
            todoState.todoList = [...todos]
        },
        removeTodo: (todoState, action: PayloadAction<number>) => {
            const currentTodos = [...todoState.todoList]
            currentTodos.splice(action.payload, 1)
            const todosForLocalStorage = JSON.stringify(currentTodos)
            currentTodos.length ? localStorage.setItem('todoList',todosForLocalStorage) : localStorage.removeItem('todoList')
            todoState.todoList = currentTodos
        }
    }
})

export default todoSlice.reducer;