import React, { useContext } from 'react';
import { RainContext } from '../GrandPa/GrandPa';
import './Aunty.css'

const Aunty = () => {
    const [rain, house, setHouse] = useContext(RainContext)
    return (
        <div className='aunty'>
            <h2>Aunty</h2>
            <p>House: {house}</p>
            <button onClick={() => setHouse(house + 1)}>{rain}</button>
        </div>
    );
};

export default Aunty;