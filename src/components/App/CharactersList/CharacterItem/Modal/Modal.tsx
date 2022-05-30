import React, {SetStateAction} from 'react';

import styles from './Modal.module.css'
import {CharacterItemI} from "../CharacterItemI";

export const Modal = ({character, setActive}: {character: CharacterItemI | undefined, setActive: SetStateAction<any>}) => {

    const styleDivInfoGender = {
        color: character?.gender === 'Male'
            ? 'deepskyblue'
            : character?.gender === 'Female'
                ? 'hotpink'
                : character?.gender === 'Genderless'
                    ? 'mediumpurple'
                    : 'grey'
    }
    const styleDivInfoStatus = {
        color: character?.status === 'Alive'
            ? 'green'
            : character?.status === 'Dead'
                ? 'red'
                : 'gray',
    };

    return (
        <div onClick={() => setActive(false)} className={styles.modal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.crossButton} onClick={() => setActive(false)}>
                    <span>x</span>
                </div>
                {character && <>
                    <div>
                        <img src={character.image} alt={`${character.name} image`}/>
                    </div>
                    <div className={styles.divInfo}>
                        <div className={styles.divInfoName}>
                            {character.name}
                        </div>
                        <div className={styles.divInfoStatus}
                             style={styleDivInfoStatus}
                        >
                            {character.status}
                        </div>
                        <div className={styles.divInfoGender}
                             style={styleDivInfoGender}
                        >
                            {character.gender}
                        </div>
                        <div className={styles.divInfoLastSeenLocation}
                             // style={styleDivInfoLastSeenLocation}
                        >
                            <span className={styles.divInfoLastSeenLocationHeader}>
                                Last known location:
                            </span>
                            <span className={styles.divInfoLastSeenLocationName}>
                                {character.location.name}
                            </span>
                        </div>
                        <div className={styles.divInfoOriginLocation}>
                            <span className={styles.divInfoOriginLocationHeader}>
                                Origin place:
                            </span>
                            <span className={styles.divInfoOriginLocationName}>
                                {character.origin.name}
                            </span>
                        </div>
                        <div className={styles.divInfoEpisodesAmount}>
                            <span>
                                Episode count:
                            </span>
                            &nbsp;
                            <span>
                                {character.episode.length}
                            </span>
                        </div>
                    </div>
                </>
                }
            </div>
        </div>
    );
}