import React from 'react';
import '../Projets/SecondPro.scss'
import secondproject from '../../Pictures/secondproject.jpg'
import Fade from "react-reveal/Slide";
import { Zoom } from "react-reveal";

const FirstPro = () => {
    return (
        <section className='secondpro-container'>
            <section className='grid-secondpro'>
                <aside className='name-project-secondpro'>
                    <section className="title-secondpro">
                    <Fade bottom duration={1000}>
                        <p><span><a href="https://github.com/YassinePerso/DOMvillage">NASATO</a></span></p>
                    </Fade>
                    </section>
                    <div className="time-secondpro">
                    <Fade left duration={1000} delay={100}>
                        <p className='bold-span'><span>#HTML #CSS #JS #REACT #API</span></p>
                        <p><span className='challenge'>Challenge - 1 Month</span></p>
                    </Fade>
                    </div>
                </aside>
                <Zoom delay={200} duration={1000}>
                <aside className='image-project-secondpro'>
                    <a href="https://github.com/YassinePerso/paris-0921-p2-groupe4">
                        <img src={secondproject} alt="relaxation" />
                    </a>
                </aside>
                </Zoom>
            </section>
        </section>
    );
};

export default FirstPro;