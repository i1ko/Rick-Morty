const localStorageTodos = JSON.parse(localStorage.getItem('todos') || '[]')
const initialTodos = localStorageTodos.length
    ? localStorageTodos
    : [{
        id: 'test',
        text: "This is a sample todo because your task list is empty",
        isDone: false
    }]
export const initialState = {
    todos: initialTodos,
}