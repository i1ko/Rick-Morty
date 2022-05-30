import React from 'react';

import styles from './CharactersList.module.css'
import {CharacterItem} from "./CharacterItem/CharacterItem";
import {CharacterItemI} from "./CharacterItem/CharacterItemI";
import {Modal} from "./CharacterItem/Modal/Modal";

export const CharactersList = ({charList}: {charList: CharacterItemI[] }) => {

    const [modalActive, setModalActive] = React.useState<boolean>(false)
    const [modalCharacter, setModalCharacter] = React.useState<CharacterItemI>()

    //TODO: can add useCallback for save link of function and doesnt create new every render time
    const onClickChar = (char: CharacterItemI) => {
        setModalActive(true)
        setModalCharacter(char)
    }

    return (
        <section className={styles.sectionCharList}>
            <div className={'container'}>
                {
                    charList && charList.length
                        ? <ul className={`${styles.ul} d-flex flex-wrap lh-1 w-100`}>
                            {charList.map((char: CharacterItemI) => {
                                return (
                                    <li className={'d-flex'} onClick={() => {
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
            {modalActive && <Modal character={modalCharacter} setActive={setModalActive}/>}
        </section>
    );
}
