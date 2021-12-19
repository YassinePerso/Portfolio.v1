import React from 'react';
import '../Projets/ThirdPro.scss'

const ThirdPro = () => {
    return (
        <section className='thirdpro-container'>
            <section className='grid-thirdpro'>
                <aside className='name-project-thirdpro'>
                    <section className="title-thirdpro" href="https://github.com/YassinePerso/DOMvillage">
                        <p><span>FESTIVAL</span></p>
                        <p><span>& FRIENDS</span></p>
                    </section>
                    <div className="time-thirdpro">
                        <p><span>#HTML #CSS #JS #REACT #EXPRESS #SQL</span></p>
                        <p><span>Challenge - 28H</span></p>
                    </div>
                </aside>
                <aside className='image-project-thirdpro'>
                    <p><span>F&F</span></p>
                </aside>
            </section>
        </section>
    );
};

export default ThirdPro;