import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/phone'>Phone</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
};

export default Header;