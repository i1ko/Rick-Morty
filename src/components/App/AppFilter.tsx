import React from "react";

import styles from './AppFilter.module.css';

export const AppFilter = ({pageParams, onChangeFilter}: any) => {
    return <div className="row p-0 pt-4 mx-auto my-0 container">
        <div className="col">
            <label htmlFor="" className={"form-label text-white fs-5"}>Gender:</label>
            <select className={"form-select"} value={pageParams.gender} name="gender" onChange={onChangeFilter}
                    placeholder={'test'}>
                <option value="">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
        <div className="col">
            <label htmlFor="" className={"form-label text-white fs-5"}>Status:</label>
            <select className={"form-select"} value={pageParams.status} name="status" onChange={onChangeFilter}>
                <option value="">All</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
        <div className="col">
            <label htmlFor="" className={"form-label text-white fs-5"}>Species:</label>
            <select className={"form-select"} name="species" onChange={onChangeFilter}>
                <option value="">All</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
                <option value="Humanoid">Humanoid</option>
                <option value="Mythological Creature">Mythological Creature</option>
                <option value="Animal">Animal</option>
                <option value="Robot">Robot</option>
                <option value="Cronenberg">Cronenberg</option>
                <option value="Poopybutthole">Poopybutthole</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
    </div>
}