import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css'

export const RainContext = createContext('init');

const GrandPa = () => {
    // let house = 7
    const [house, setHouse] = useState(1)
    const increaseHouse = () => setHouse(house + 1)

    const ornament = 'Diamond Ring'
    return (
        <RainContext.Provider value={['rain', house, setHouse]}>
            <div className='grandpa'>
                <h2>GrandPa</h2>
                <p>House: {house}</p>
                <button onClick={() => increaseHouse()}>Increase House</button>
                <div className='grandpa-child'>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RainContext.Provider>
    );
};

export default GrandPa;