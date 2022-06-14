import {CharacterItemI} from "../../components/App/CharactersApp/CharactersList/CharacterItem/CharacterItemI";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ModalState {
    isModalActive: boolean;
    modalCharacter: CharacterItemI | null;
}

const initialState: ModalState = {
    isModalActive: false,
    modalCharacter: null,
}

export const modalSlice = createSlice({
    name: 'Modal',
    initialState,
    reducers: {
        showModal: (modalState, action: PayloadAction<CharacterItemI>) => {
            modalState.modalCharacter = action.payload;
            modalState.isModalActive = true
        },
        hideModal: (modalState) => {
            modalState.modalCharacter = null;
            modalState.isModalActive = false;
        }
    }
})

export default modalSlice.reducer;