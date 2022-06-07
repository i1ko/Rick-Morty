import React from 'react';

import styles from './Modal.module.css'
import {isModalActive, modalCharacter} from "../../../../../../app/selectors";
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../../../../../../app/actionCreators";

export const Modal = () => {

    const dispatch = useDispatch()
    const isModalStateActive = useSelector(isModalActive)
    const character = useSelector(modalCharacter)

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
        <div onClick={() => dispatch(hideModal())} className={`${styles.modal} ${isModalStateActive ? null : 'd-none'}`}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.crossButton} onClick={() => dispatch(hideModal())}>
                    <span>✕</span>
                </div>
                {character && <>
                    <div>
                        <img src={character.image} alt={`${character.name} image`}/>
                    </div>
                    <div className={styles.divInfo}>
                        <div className={styles.divName}>
                            {character.name}
                        </div>
                        <div className={styles.divInfoDetails}>
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
                    </div>
                </>
                }
            </div>
        </div>
    );
}