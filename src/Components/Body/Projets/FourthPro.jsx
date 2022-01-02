import React from 'react';
import '../Projets/FourthPro.scss';
import Fade from "react-reveal/Slide";

const FourthPro = () => {
    return (
        <section className='fourthpro-container'>
            <Fade left duration={1000} delay={100}>
            <section className='grid-fourthpro'>
                <p><span>WORK</span></p>
                <p><span>IN</span></p>
                <p><span>PROGRESS ...</span></p>
            </section>
            </Fade>
        </section>
    );
};

export default FourthPro;