import React from 'react';
import "./Styles/Body.css"
import body from '../assets/body.png'
const Body = () => {
    return (
        <div className='Body'>
            <img src={body} alt="Body" className='Body-Image' />
        </div>
    );
};

export default Body;