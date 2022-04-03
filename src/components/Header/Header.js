import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CusomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome to TShirt Mania!!!</h1>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/orderreview">OrderReview</CustomLink>
                <CustomLink to="/grandpa">Grandpa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;