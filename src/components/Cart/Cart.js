import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart, removeFromCart} = props
    // console.log(cart)
    let command;
    if(cart.length === 0){
        command = <p className='elementVariable'>Please Add at least one item!!!</p>
    }else if(cart.length === 1){
        command = <p className='elementVariable'>Please add more ...</p>
    }else{
        command = <p className='elementVariable'><small>Thanks for adding item.</small></p>
    }
    return (
        <div>
            <h2>length: {cart.length}</h2>
            {
                cart.map(item => <p>
                    {item.name}
                    <button onClick={() => removeFromCart(item)}>X</button>
                </p>)
            }
            {/* conditional randering
            1. Element or Variable
            2. tarnary operrator
            3. && (and and)
            4. || (or or)
            */}
            {command}

            <p className='tarnary'>{cart.length === 3 ? 'if tarnary 3 true' : 'if tarnary 3 false'}</p>

            {cart.length === 3 && <button className='andAnd'>&& is true. Left side true (mainly)</button>}

            {cart.length === 3 || <button className='orOr'>|| is false. Left side false (mainly)</button>}

        </div>
    );
};

export default Cart;