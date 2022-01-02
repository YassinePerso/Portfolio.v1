import React from 'react';
import '../Projets/Bar.scss';
import { Zoom } from 'react-reveal';

const Bar = () => {
    return (
        <div className='bar-container'>
            <Zoom delay={100} duration={1000}>
            <div className="bar"></div>
            </Zoom>
        </div>
    );
};

export default Bar;