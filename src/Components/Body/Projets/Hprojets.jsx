import React, { useEffect } from 'react';
import'../Projets/Hprojets.scss';
import flècheBasDroite from '../../Pictures/flèche-bas-droite.png';

const Hprojets = ({timeline}) => {

    useEffect(() => {
        timeline.from("span", {
            duration: 1.5,
            y: 200,
            opacity: 0,
            ease: "Power3.easeOut",
            stagger: {
                amount: 1,
            }
        });
        timeline.from("img", {
            y: 200,
            opacity: 0,
        }, "-=1.6");
    });

    return (
        <section className="H1projets">
            <span>M</span>
            <span>e</span>
            <span>s</span>
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>t</span>
            <span>s</span>
            <img src={flècheBasDroite} alt="arrow" width={120} />
        </section>
    );
};

export default Hprojets;