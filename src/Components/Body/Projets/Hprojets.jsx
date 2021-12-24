import React, { useEffect } from 'react';
import'../Projets/Hprojets.scss';
import flècheBasDroite from '../../Pictures/flèche-bas-droite.png';

const Hprojets = ({timeline}) => {

    useEffect(() => {
        timeline.from("span", {
            duration: 1.2,
            y: 200,
            ease: "Power3.easeOut",
        });
        timeline.from("img", {
            duration: 1,
            y: 200,
            opacity: 0,
        }, "-=1.2");
    });

    return (
        <section className="H1projets">
            <p>
                <span>Mes Projets</span>
            </p>
            <img src={flècheBasDroite} alt="arrow" width={110} />
        </section>
    );
};

export default Hprojets;