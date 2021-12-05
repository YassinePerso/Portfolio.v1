import React from 'react';
import TransitionHome from '../Transition/TransitionHome';
import gsap from 'gsap';

import NavBar from '../Header/NavBar'
import Footer from '../Footer/Footer'
import Title from '../Body/Title';

const Accueil = () => {

    const home = gsap.timeline();
    return (
        <>
        <TransitionHome timeline={home}/>
        <NavBar />
        <Title />
        <Footer />
        </>
    )
}

export default Accueil;