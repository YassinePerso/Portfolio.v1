import React from 'react';
import '../Projets/SecondPro.scss'
import secondproject from '../../Pictures/secondproject.jpg'

const FirstPro = () => {
    return (
        <section className='secondpro-container'>
            <section className='grid-secondpro'>
                <aside className='name-project-secondpro'>
                    <section className="title-secondpro">
                        <p><span><a href="https://github.com/YassinePerso/DOMvillage">NASATO</a></span></p>
                    </section>
                    <div className="time-secondpro">
                        <p className='bold-span'><span>#HTML #CSS #JS #REACT #API</span></p>
                        <p><span className='challenge'>Challenge - 1 Month</span></p>
                    </div>
                </aside>
                <aside className='image-project-secondpro'>
                    <a href="https://github.com/YassinePerso/paris-0921-p2-groupe4">
                        <img src={secondproject} alt="relaxation" />
                    </a>
                </aside>
            </section>
        </section>
    );
};

export default FirstPro;