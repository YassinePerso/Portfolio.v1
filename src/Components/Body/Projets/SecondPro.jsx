import React from 'react';
import '../Projets/SecondPro.scss'
import secondproject from '../../Pictures/secondproject.jpg'

const FirstPro = () => {
    return (
        <section className='secondpro-container'>
            <section className='grid-secondpro'>
                <aside className='name-project-secondpro'>
                    <section className="title-secondpro" href="https://github.com/YassinePerso/DOMvillage">
                        <p><span>NASATO</span></p>
                    </section>
                    <div className="time-secondpro">
                        <p className='bold-span'><span>#HTML #CSS #JS #REACT #API</span></p>
                        <p><span>Challenge - 1 Month</span></p>
                    </div>
                </aside>
                <aside className='image-project-secondpro'>
                    <img src={secondproject} alt="relaxation" />
                </aside>
            </section>
        </section>
    );
};

export default FirstPro;