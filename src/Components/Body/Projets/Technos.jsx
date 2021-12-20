import React from 'react';
import '../Projets/Technos.scss'

const Technos = () => {
    return (
        <section className='technos-container'>
            <section className="technos-title">
                <p><span>Technos :</span></p>
            </section>
            <div className="html"></div>
            <div className="css"></div>
            <div className="javascript"></div>
            <div className="react"></div>
            <div className="api"></div>
            <div className="mysql"></div>
            <div className="express"></div>
        </section>
    );
};

export default Technos;