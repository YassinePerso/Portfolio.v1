import React from 'react';
import '../Who/BarWho.scss';
import { Zoom } from 'react-reveal';

const BarWho = () => {
    return (
        <div className='bar-who-container'>
            <Zoom delay={50} duration={800}>
            <div className="bar-who"></div>
            </Zoom>
        </div>
    );
};

export default BarWho;