// TODO: state type
export const getTodos = (store: any) => store.todoState.todoList

export const isModalActive = (store: any) => store.modalState.modalActive
export const modalCharacter = (store: any) => store.modalState.modalCharacter