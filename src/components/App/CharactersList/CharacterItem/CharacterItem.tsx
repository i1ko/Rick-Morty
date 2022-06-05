import React from 'react'
import styles from './CharacterItem.module.css'

import {CharacterItemI} from "./CharacterItemI";

export const CharacterItem = ({character: {name, image, status}}: { character: CharacterItemI }) => {

    console.log('CharItem rendered')

    const styleDivInfoStatus = {
        background: status === 'Alive'
            ? 'green'
            : status === 'Dead'
                ? 'red'
                : 'gray',
        borderRadius: '50%',
        height: '0.5rem',
        width: '0.5rem',
        fontSize: '16px',
        fontWeight: '500',
        alignItems: 'center'
    };


    return (
        <article className={styles.charArticle}>
            <div className={`${styles.characterDiv} d-flex w-100 justify-content-between`}>
                <div className={'d-flex align-items-center'}>
                    <div className={styles.divImg}>
                        <img src={image} alt={`${name} photo`}/>
                    </div>
                    <div className={`${styles.divInfo} divInfo px-2 fs-5`}>{name}</div>
                </div>
                <div className={`${styles.divStatus} pe-3`}>
                    <span style={styleDivInfoStatus}/>
                </div>
            </div>
        </article>
    );
}