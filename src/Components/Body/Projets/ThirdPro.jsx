import React from 'react';
import '../Projets/ThirdPro.scss'
import thirdproject from '../../Pictures/thirdproject.jpg'

const ThirdPro = () => {
    return (
        <section className='thirdpro-container'>
            <section className='grid-thirdpro'>
                <aside className='name-project-thirdpro'>
                    <section className="title-thirdpro">
                        <p><span><a href="https://github.com/YassinePerso/festival_App---Hackaton1">FESTIVAL</a></span></p>
                        <p><span><a href="https://github.com/YassinePerso/festival_App---Hackaton1">& FRIENDS</a></span></p>
                    </section>
                    <div className="time-thirdpro">
                        <p className='bold-span'><span>#HTML #CSS #JS #REACT</span></p>
                        <p><span className='challenge'>Challenge - 28H</span></p>
                    </div>
                </aside>
                <aside className='image-project-thirdpro'>
                    <a href="https://github.com/YassinePerso/festival_App---Hackaton1">
                        <img src={thirdproject} alt="festival" />
                    </a>
                </aside>
            </section>
        </section>
    );
};

export default ThirdPro;