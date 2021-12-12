import React from 'react';
import Hprojets from '../Body/Projets/Hprojets';
import NavBar from '../Header/NavBar'
import gsap from 'gsap';


const Projets = () => {


    let timeline = gsap.timeline();

    return (
        <div>
            <NavBar timeline={timeline}/>
            <Hprojets timeline={timeline}/>
        </div>
    )
}

export default Projets;