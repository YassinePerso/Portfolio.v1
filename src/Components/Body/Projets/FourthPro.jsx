import React from 'react';
import '../Projets/FourthPro.scss'
import fourthproject from '../../Pictures/fourthproject.jpg';
import Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";

const FourthPro = () => {
    return (
        <section className='fourthpro-container'>
            <section className='grid-fourthpro'>
                <aside className='name-project-fourthpro'>
                    <section className="title-fourthpro">
                    <Fade bottom duration={1000}>
                        <p><span><a href="https://github.com/YassinePerso/festival_App---Hackaton1">CLIENT</a></span></p>
                        <p><span><a href="https://github.com/YassinePerso/festival_App---Hackaton1">- PROJECT</a></span></p>
                    </Fade>
                    </section>
                    <div className="time-fourthpro">
                    <Fade left duration={1000} delay={100}>
                        <p className='bold-span'><span>#HTML #CSS #NEXT #MySQL #EXPRESS #PRISMA</span></p>
                        <p><span className='challenge'>Challenge - 45 days</span></p>
                     </Fade>
                    </div>
                </aside>
                <Zoom delay={200} duration={1000}>
                <aside className='image-project-fourthpro'>
                    <a href="https://github.com/YassinePerso/festival_App---Hackaton1">
                        <img src={fourthproject} alt="festival" />
                    </a>
                </aside>
                </Zoom>
            </section>
        </section>
    );
};

export default FourthPro;