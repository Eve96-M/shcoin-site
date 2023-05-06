import React from 'react';
import './Styles/Graphics.css'
import graphic from '../assets/graphic.png'
const Graphics = () => {
    return (
        <div className='Graphics'>
            <img src={graphic} alt="Graphics" className='Graphics-Image' />
        </div>
    );
};

export default Graphics;