import React from 'react';
import '../Projets/FifthPro.scss';
import Fade from "react-reveal/Slide";

const FifthPro = () => {
    return (
        <section className='fifthpro-container'>
            <Fade left duration={1000} delay={100}>
            <section className='grid-fifthpro'>
                <p><span>UPCOMING</span></p>
                <p><span>PROJECTS</span></p>
            </section>
            </Fade>
        </section>
    );
};

export default FifthPro;