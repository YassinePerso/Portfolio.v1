import React, { useEffect } from 'react';
import '../Who/Skills.scss'
// import flècheBasDroite from '../../Pictures/flèche-bas-droite.png'

const Skills = ({timeline}) => {

    useEffect(() => {
        // timeline.from("h1", {
        //     duration: .6,
        //     y: 500,
        //     skewY: 30,
        // })
    })
    return (
            <section className="my-skills-reel" id="skill-reel">
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
            </section>
    );
};

export default Skills;