import React, { useState } from 'react';
import useTShirts from '../../hook/useTShirts';
import Cart from '../Cart/Cart';
import TShirts from '../TShirts/TShirts';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirts] = useTShirts()
    const [cart, setCart] = useState([])

    const addToCart = (addTShirt) => {
        const exist = cart.find(tShirt => tShirt._id === addTShirt._id)
        if(!exist){
            setCart([...cart, addTShirt])
        }else{
            alert('Sorry, You are already added.')
        }
    }

    const removeFromCart = (removeTShirt) => {
        debugger;
        console.log(removeTShirt)

        const rest = cart.filter(item => item._id !== removeTShirt._id)
        console.log(rest)
        setCart(rest)
    }
    return (
        <div>
            <div className='home-container'>
                <div className="tShirt-container">
                    {
                        tShirts.map(tShirt => <TShirts 
                            tShirt={tShirt} 
                            key={tShirt._id}
                            addToCart={addToCart}
                            ></TShirts>)
                    }
                </div>
                <div className="cart-container">
                    <Cart 
                    cart={cart}
                    removeFromCart={removeFromCart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;