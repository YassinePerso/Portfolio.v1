import React from 'react';
import '../Projets/FirstPro.scss'
import firstproject from '../../Pictures/firstproject.jpg';
import { Zoom } from "react-reveal";
import Fade from "react-reveal/Slide";


const FirstPro = () => {
    return (
        <section className='firstpro-container'>
            <section className='grid-firstpro'>
                <aside className='name-project-firstpro'>
                    <section className="title-firstpro">
                    <Fade bottom duration={1000}>
                            <p><span>
                                <a href="https://github.com/YassinePerso/DOMvillage">DOM</a>
                                </span></p>
                            <p><span><a href="https://github.com/YassinePerso/DOMvillage">VILLAGE</a></span></p>
                    </Fade>
                    </section>
                    <div className="time-firstpro">
                    <Fade left duration={1000} delay={100}>
                        <p className='bold-span'><span>#HTML #CSS #JS</span></p>
                        <p><span className='challenge'>Challenge - 2 Weeks</span></p>
                    </Fade>

                    </div>
                </aside>
                <Zoom delay={200} duration={1000}>
                <aside className='image-project-firstpro'>
                    <a href="https://github.com/YassinePerso/DOMvillage">
                     <img src={firstproject} alt="village" />
                    </a>
                </aside>
                </Zoom>
            </section>
        </section>
    );
};

export default FirstPro;