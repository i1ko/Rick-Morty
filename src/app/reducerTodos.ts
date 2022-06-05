import {v4 as uuid} from "uuid";

//TODO: state and action any type
export default function reducerTodos(todoState: any, action: any) {
    switch (action.type) {
        case 'ADD_TODO':
            const text = action.payload
            const todoId = uuid()
            const todoConfig = {text: text, id: todoId, isDone: false}
            const newTodos = [...todoState.todoList, todoConfig]
            const addedTodosForLocalStorage = JSON.stringify(newTodos)
            localStorage.setItem('todoList',addedTodosForLocalStorage)
            return {
                ...todoState,
                todoList: newTodos
            }
        case 'MARK_TODO':
            const index = action.payload;
            const todos = [...todoState.todoList]
            todos[index] = {
                ...todos[index],
                isDone: !(todos[index].isDone)
            }
            const markedTodosForLocalStorage = JSON.stringify(todos)
            localStorage.setItem('todoList',markedTodosForLocalStorage)
            return {
                ...todoState,
                todoList: [...todos]
        }
        case 'REMOVE_TODO':
            const currentTodos = [...todoState.todoList]
            currentTodos.splice(action.payload, 1)
            const todosForLocalStorage = JSON.stringify(currentTodos)
            currentTodos.length ? localStorage.setItem('todoList',todosForLocalStorage) : localStorage.removeItem('todoList')
            return {
                ...todoState,
                todoList: currentTodos
            }

        default:
            const localStorageTodos = JSON.parse(localStorage.getItem('todoList') || '[]')
            const initialTodos = localStorageTodos.length
                ? localStorageTodos
                : [{
                    id: 'test',
                    text: "This is a sample todo because your task list is empty",
                    isDone: false
                }]
            return {
                ...todoState,
                todoList: initialTodos
            }
    }
}