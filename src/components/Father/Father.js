import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';
import './Father.css'

const Father = ({ house, ornament }) => {
    return (
        <div className='father'>
            <h2>Father {house}</h2>
            <p>House: {house}</p>
            <div className='father-child'>
                <Myself house={house} ornament={ornament}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;