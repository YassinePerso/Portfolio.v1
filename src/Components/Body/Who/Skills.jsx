import React, { useEffect } from 'react';
import '../Who/Skills.scss'
// import flècheBasDroite from '../../Pictures/flèche-bas-droite.png'

const Skills = ({timeline}) => {

    useEffect(() => {
        timeline.from("h1", {
            duration: .6,
            y: 500,
            skewY: 30,
        })
    })
    return (
        <section className="skills">
            {/* <section className="h1-skills">
                <h1>My Skills :</h1>
                <img src={flècheBasDroite} alt="arrow" width={50} />
            </section> */}
            
        </section>
    );
};

export default Skills;