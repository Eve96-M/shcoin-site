import React from 'react';
import './Styles/Display.css'
import Logo from '../assets/logo.png'
const Display = () => {
    return (
        <div className='Display'>
            <img src={Logo} alt="Logo" className='Display-Logo' />
            <ul className='Display-Navbar'>
                <a href=""><li className='Display-Navbar-Element'>TELEGRAM</li></a>
                <a href=""><li className='Display-Navbar-Element'>DEXTOOLS</li></a>
                <a href=""><li className='Display-Navbar-Element'>ROADMAP</li></a>
                <a href=""><li className='Display-Navbar-Element'>LFG BITCH</li></a>
            </ul>
        </div>
    );
};

export default Display; <ul>
</ul>