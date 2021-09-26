import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='navbar'>
                <h1><span className='make'>make</span>TRIP</h1>
                <div className='menu'>
                    <a href="/home">Support</a>
                    <a href="/about-us">+880171215146</a>
                    <a href="/Services">Login</a>
                </div>
            </div>
            <div className='content'>
                <h1>Make your own trip Package</h1>
                <p>You can make your own budget, and your trip will awesome</p>
                <h2>Total Budget:100 million</h2>
            </div>
        </div>
    );
};

export default Header;