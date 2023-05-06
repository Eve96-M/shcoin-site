import React from 'react';
import roadmap from '../assets/roadmap.png'
import './Styles/Roadmap.css'
const Roadmap = () => {
    return (
        <div className='Roadmap'>
            <img src={roadmap} alt="Roadmap" className='Roadmap-Image' />
        </div>
    );
};

export default Roadmap;