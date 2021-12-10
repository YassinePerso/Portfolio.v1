import React from 'react';

import NavBar from '../Header/NavBar'
import Title from '../Body/homepage/Title';
import Footer from '../Footer/Footer'
import gsap from "gsap";


const Accueil = () => {


    let timeline = gsap.timeline();

    return (
        <>
        <NavBar timeline={timeline} />
        <Title  timeline={timeline} />
        <Footer timeline={timeline} />
        </>
    )
}

export default Accueil;