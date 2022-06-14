import React from 'react';

import styles from './Modal.module.css'
import {useAppDispatch, useAppSelector} from "../../../../../../redux/hooks";
import {modalSlice} from "../../../../../../redux/reducers/reducerModal";

export const Modal = () => {

    const dispatch = useAppDispatch()
    const {hideModal} = modalSlice.actions;
    const {isModalActive, modalCharacter} = useAppSelector(state => state.reducerModal)

    const styleDivInfoGender = {
        color: modalCharacter?.gender === 'Male'
            ? 'deepskyblue'
            : modalCharacter?.gender === 'Female'
                ? 'hotpink'
                : modalCharacter?.gender === 'Genderless'
                    ? 'mediumpurple'
                    : 'grey'
    }
    const styleDivInfoStatus = {
        color: modalCharacter?.status === 'Alive'
            ? 'green'
            : modalCharacter?.status === 'Dead'
                ? 'red'
                : 'gray',
    };

    return (
        <div onClick={() => dispatch(hideModal())} className={`${styles.modal} ${isModalActive ? null : 'd-none'}`}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.crossButton} onClick={() => dispatch(hideModal())}>
                    <span>✕</span>
                </div>
                {modalCharacter && <>
                    <div>
                        <img src={modalCharacter.image} alt={`${modalCharacter.name} image`}/>
                    </div>
                    <div className={styles.divInfo}>
                        <div className={styles.divName}>
                            {modalCharacter.name}
                        </div>
                        <div className={styles.divInfoDetails}>
                            <div className={styles.divInfoStatus}
                                 style={styleDivInfoStatus}
                            >
                                {modalCharacter.status}
                            </div>
                            <div className={styles.divInfoGender}
                                 style={styleDivInfoGender}
                            >
                                {modalCharacter.gender}
                            </div>
                            <div className={styles.divInfoLastSeenLocation}
                                // style={styleDivInfoLastSeenLocation}
                            >
                            <span className={styles.divInfoLastSeenLocationHeader}>
                                Last known location:
                            </span>
                                <span className={styles.divInfoLastSeenLocationName}>
                                {modalCharacter.location.name}
                            </span>
                            </div>
                            <div className={styles.divInfoOriginLocation}>
                            <span className={styles.divInfoOriginLocationHeader}>
                                Origin place:
                            </span>
                                <span className={styles.divInfoOriginLocationName}>
                                {modalCharacter.origin.name}
                            </span>
                            </div>
                            <div className={styles.divInfoEpisodesAmount}>
                            <span>
                                Episode count:
                            </span>
                                &nbsp;
                                <span>
                                {modalCharacter.episode.length}
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