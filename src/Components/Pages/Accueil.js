import React from 'react';

import NavBar from '../Header/NavBar'
import Title from '../Body/homepage/Title';
import Footer from '../Footer/Footer'
import gsap from "gsap";
// import TransitionHome from '../Body/Transition/TransitionHome';


const Accueil = () => {


    let timeline = gsap.timeline();

    return (
        <>
        {/* <TransitionHome timeline={timeline} /> */}
        <NavBar timeline={timeline} />
        <Title  timeline={timeline} />
        <Footer timeline={timeline} />
        </>
    )
}

export default Accueil;