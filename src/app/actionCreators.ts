import {CharacterItemI} from "../components/App/CharactersApp/CharactersList/CharacterItem/CharacterItemI";

export const ADD_TODO = 'ADD_TODO';
export const addTodo = (text: string) => {
    return {type: 'ADD_TODO', payload: text}
}
export const MARK_TODO = 'MARK_TODO';
export const markTodo = (index: number) => {
    return {type: MARK_TODO, payload: index}
}
export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (index: number) => {
    return {type: REMOVE_TODO, payload: index}
}

export const SHOW_MODAL = 'SHOW_MODAL';
export const showModal = (character: CharacterItemI) => {
    return {type: SHOW_MODAL, payload: character}
}

export const HIDE_MODAL = 'HIDE_MODAL';
export const hideModal = () => {
    return {type: HIDE_MODAL}
}