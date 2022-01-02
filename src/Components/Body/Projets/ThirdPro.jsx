import React from 'react';
import '../Projets/ThirdPro.scss'
import thirdproject from '../../Pictures/thirdproject.jpg';
import Fade from "react-reveal/Slide";
import { Zoom } from "react-reveal";

const ThirdPro = () => {
    return (
        <section className='thirdpro-container'>
            <section className='grid-thirdpro'>
                <aside className='name-project-thirdpro'>
                    <section className="title-thirdpro">
                    <Fade bottom duration={1000}>
                        <p><span><a href="https://github.com/YassinePerso/festival_App---Hackaton1">FESTIVAL</a></span></p>
                        <p><span><a href="https://github.com/YassinePerso/festival_App---Hackaton1">& FRIENDS</a></span></p>
                    </Fade>
                    </section>
                    <div className="time-thirdpro">
                    <Fade left duration={1000} delay={100}>
                        <p className='bold-span'><span>#HTML #CSS #JS #REACT</span></p>
                        <p><span className='challenge'>Challenge - 28H</span></p>
                     </Fade>
                    </div>
                </aside>
                <Zoom delay={200} duration={1000}>
                <aside className='image-project-thirdpro'>
                    <a href="https://github.com/YassinePerso/festival_App---Hackaton1">
                        <img src={thirdproject} alt="festival" />
                    </a>
                </aside>
                </Zoom>
            </section>
        </section>
    );
};

export default ThirdPro;