import React, {useCallback} from 'react';

import styles from './CharactersList.module.css'
import {CharacterItem} from "./CharacterItem/CharacterItem";
import {CharacterItemI} from "./CharacterItem/CharacterItemI";
import {useAppDispatch} from "../../../../redux/hooks";
import {modalSlice} from "../../../../redux/reducers/reducerModal";

export const CharactersList = React.memo(({charList}: {charList: CharacterItemI[] }) => {

    const {showModal} = modalSlice.actions;
    const dispatch = useAppDispatch()

    //TODO: can add useCallback for save link of function and doesnt create new every render time
    const onClickChar = useCallback((char: CharacterItemI) => {
        dispatch(showModal(char))
    },[])

    return (
        <section className={styles.sectionCharList}>
            <div className={'container'}>
                {
                    charList && charList.length
                        ? <ul className={`${styles.ul} d-flex lh-1 w-100 flex-column`}>
                            {charList.map((char: CharacterItemI) => {
                                return (
                                    <li className={'d-flex w-100'} onClick={() => {
                                        onClickChar(char)
                                    }} key={char.id}>
                                        <CharacterItem character={char}/>
                                    </li>
                                )
                            })}
                        </ul>
                        : <p>Loading...</p>
                }
            </div>
        </section>
    );
})
