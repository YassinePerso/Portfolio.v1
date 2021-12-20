import React from 'react';
import '../Projets/FirstPro.scss'
import firstproject from '../../Pictures/firstproject.jpg'


const FirstPro = () => {
    return (
        <section className='firstpro-container'>
            <section className='grid-firstpro'>
                <aside className='name-project-firstpro'>
                    <section className="title-firstpro" href="https://github.com/YassinePerso/DOMvillage">
                        <p><span>DOM</span></p>
                        <p><span>VILLAGE</span></p>
                    </section>
                    <div className="time-firstpro">
                        <p className='bold-span'><span>#HTML #CSS #JS</span></p>
                        <p><span>Challenge - 2 Weeks</span></p>
                    </div>
                </aside>
                <aside className='image-project-firstpro'>
                    <img src={firstproject} alt="village" />
                </aside>
            </section>
        </section>
    );
};

export default FirstPro;