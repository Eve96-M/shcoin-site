import React from 'react';
import './Styles/Display.css'
import Logo from '../assets/logo.png'
const Display = () => {
    return (
        <div className='Display'>
            <img src={Logo} alt="Logo" className='Display-Logo' />
            <ul className='Display-Navbar'>
                <a href="https://t.me/jabbaverification"><li className='Display-Navbar-Element'>TELEGRAM</li></a>
                <a href="https://www.dextools.io/app/en/pairs"><li className='Display-Navbar-Element'>DEXTOOLS</li></a>
                <a href=""><li className='Display-Navbar-Element'>ROADMAP</li></a>
                <a href=""><li className='Display-Navbar-Element'>BUY</li></a>
            </ul>
        </div>
    );
};

export default Display; <ul>
</ul>