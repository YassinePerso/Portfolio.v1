import React from 'react';
import '../Projets/SecondPro.scss'

const FirstPro = () => {
    return (
        <section className='secondpro-container'>
            <section className='grid-secondpro'>
                <aside className='name-project-secondpro'>
                    <section className="title-secondpro" href="https://github.com/YassinePerso/DOMvillage">
                        <p><span>NASATO</span></p>
                    </section>
                    <div className="time-secondpro">
                        <p><span>#HTML #CSS #JS #REACT #API</span></p>
                        <p><span>Challenge - 1 Month</span></p>
                    </div>
                </aside>
                <aside className='image-project-secondpro'>
                    <span>NASATO</span>
                </aside>
            </section>
        </section>
    );
};

export default FirstPro;