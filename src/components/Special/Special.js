import React, { useContext } from 'react';
import { RainContext } from '../GrandPa/GrandPa';

const Special = ({ornament}) => {
    // const rain = useContext(RainContext)
    const [rain, house, setHouse] = useContext(RainContext)
    return (
        <div>
            <h3>Special</h3>
            <b>from GrandPa</b>
            <p><small>Gift: {ornament}</small></p>
            <b>{rain}</b>
        </div>
    );
};

export default Special;