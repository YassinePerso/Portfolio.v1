import React from 'react';
import '../Projets/FirstPro.scss'

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
                        <p><span>#HTML #CSS</span></p>
                        <p><span>Challenge : 2 semaines - en équipe</span></p>
                    </div>
                </aside>
                <aside className='image-project-firstpro'>
                    <span>DOM</span>
                    <span>VILLAGE</span>
                </aside>
            </section>
        </section>
    );
};

export default FirstPro;