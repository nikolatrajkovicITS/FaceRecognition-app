import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import brain from './brain.svg';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br-2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div style={{paddingTop: '5px'}} className="Tilt-inner pa3"><img src={brain} alt='logo'/></div>
            </Tilt>
        </div>
    );
}

export default Logo; 