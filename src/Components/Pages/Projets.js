import React from 'react';
import Hprojets from '../Body/Projets/Hprojets';
import NavBar from '../Header/NavBar'
import gsap from 'gsap';
import TransitionProjets from '../Body/Transition/TransitionProjets';



const Projets = () => {


    let timeline = gsap.timeline();

    return (
        <>
        <TransitionProjets timeline={timeline} />
        <NavBar timeline={timeline}/>
        <Hprojets timeline={timeline}/>
        </>
    )
}

export default Projets;