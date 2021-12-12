import React from 'react';
import NavBar from '../Header/NavBar'
import gsap from 'gsap';
import Presentation from '../Body/Who/Presentation';
import Skills from '../Body/Who/Skills';

const QuiSuisJe = () => {

    let timeline = gsap.timeline();


    return (
        <>
            <NavBar timeline={timeline} />
            <Presentation timeline={timeline} />
            <Skills timeline={timeline} />
        </>
    )
}

export default QuiSuisJe;