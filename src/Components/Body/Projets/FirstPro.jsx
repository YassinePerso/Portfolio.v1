import React from 'react';
import '../Projets/FirstPro.scss'
import firstproject from '../../Pictures/firstproject.jpg'


const FirstPro = () => {
    return (
        <section className='firstpro-container'>
            <section className='grid-firstpro'>
                <aside className='name-project-firstpro'>
                    <section className="title-firstpro">
                            <p><span><a href="https://github.com/YassinePerso/DOMvillage">DOM</a></span></p>
                            <p><span><a href="https://github.com/YassinePerso/DOMvillage">VILLAGE</a></span></p>
                        
                    </section>
                    <div className="time-firstpro">
                        <p className='bold-span'><span>#HTML #CSS #JS</span></p>
                        <p><span className='challenge'>Challenge - 2 Weeks</span></p>
                    </div>
                </aside>
                <aside className='image-project-firstpro'>
                    <a href="https://github.com/YassinePerso/DOMvillage">
                     <img src={firstproject} alt="village" />
                    </a>
                </aside>
            </section>
        </section>
    );
};

export default FirstPro;