import React from 'react';

import kelas from './BuildControl.css';
const buildControl = ( props ) => (


    <div className={kelas.BuildControl}>
        <div className={kelas.Label}>{props.label}</div>
        <button className={kelas.Less}>Less</button>
        <button className={kelas.More} onClick={props.added}>More</button>
    </div>
);

export default buildControl;