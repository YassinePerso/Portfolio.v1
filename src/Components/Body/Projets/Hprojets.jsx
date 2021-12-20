import React, { useEffect } from 'react';
import'../Projets/Hprojets.scss';
import flècheBasDroite from '../../Pictures/flèche-bas-droite.png';

const Hprojets = ({timeline}) => {

    useEffect(() => {
        timeline.from("span", {
            duration: 1.1,
            y: 200,
            ease: "Power3.easeOut",
            // stagger: {
            //     amount: 1,
            // }
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
            <img src={flècheBasDroite} alt="arrow" width={120} />
        </section>
    );
};

export default Hprojets;