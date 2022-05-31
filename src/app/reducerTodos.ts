import {v4 as uuid} from "uuid";

//TODO: state and action any type
export default function reducerTodos(state: any, action: any) {
    switch (action.type) {
        case 'ADD_TODO':
            const text = action.payload
            const todoId = uuid()
            const todoConfig = {text: text, id: todoId, isDone: false}
            const newTodos = [...state.todos, todoConfig]
            const addedTodosForLocalStorage = JSON.stringify(newTodos)
            localStorage.setItem('todos',addedTodosForLocalStorage)
            return {
                ...state,
                todos: newTodos
            }
        case 'MARK_TODO':
            const index = action.payload;
            const todos = [...state.todos]
            todos[index] = {
                ...todos[index],
                isDone: !(todos[index].isDone)
            }
            const markedTodosForLocalStorage = JSON.stringify(todos)
            localStorage.setItem('todos',markedTodosForLocalStorage)
            return {
                ...state,
                todos: [...todos]
            }
        case 'REMOVE_TODO':
            const currentTodos = [...state.todos]
            currentTodos.splice(action.payload, 1)
            const todosForLocalStorage = JSON.stringify(currentTodos)
            currentTodos.length ? localStorage.setItem('todos',todosForLocalStorage) : localStorage.removeItem('todos')
            return {
                ...state,
                todos: currentTodos
            }

        default: return state
    }
}