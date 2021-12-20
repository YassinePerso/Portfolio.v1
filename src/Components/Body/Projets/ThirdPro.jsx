import React from 'react';
import '../Projets/ThirdPro.scss'
import thirdproject from '../../Pictures/thirdproject.jpg'

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
                        <p className='bold-span'><span>#HTML #CSS #JS #REACT #EXPRESS #SQL</span></p>
                        <p><span>Challenge - 28H</span></p>
                    </div>
                </aside>
                <aside className='image-project-thirdpro'>
                    <img src={thirdproject} alt="festival" />
                </aside>
            </section>
        </section>
    );
};

export default ThirdPro;