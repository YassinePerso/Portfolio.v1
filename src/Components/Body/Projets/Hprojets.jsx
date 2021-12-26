import React from 'react';
import'../Projets/Hprojets.scss';
import flècheBasDroite from '../../Pictures/flèche-bas-droite.png';




const Hprojets = ({timeline}) => {


    return (
        <section className="H1projets">
            <p data-aos-anchor-placement="top-center" data-aos="fade-up">
                <span>Mes Projets</span>
            </p>
            <img src={flècheBasDroite} alt="arrow" width={110} />
        </section>
    );
};

export default Hprojets;