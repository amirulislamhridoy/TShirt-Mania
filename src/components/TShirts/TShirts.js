import React from 'react';
import './TShirt.css'

const TShirts = (props) => {
    // console.log(props)
    
    const {addToCart, tShirt} = props
    const {name, price, picture} = props.tShirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt=""></img>
            <h4>{name}</h4>
            <p>{price}</p>
            <button onClick={() => addToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirts;