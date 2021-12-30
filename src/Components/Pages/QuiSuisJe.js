import React from 'react';
import NavBar from '../Header/NavBar'
import gsap from 'gsap';
import Presentation from '../Body/Who/Presentation';
// import Skills from '../Body/Who/Skills';
import TransitionWho from '../Body/Transition/TransitionWho';
import Marquee from '../Body/Who/Marquee';
import ContactFooter from '../Footer/ContactFooter'

const QuiSuisJe = () => {

    let timeline = gsap.timeline();


    return (
        <>
            <TransitionWho timeline={timeline} />
            <NavBar timeline={timeline} />
            <Presentation timeline={timeline} />
            <Marquee />
            {/* <Skills /> */}
            <ContactFooter />
        </>
    )
}

export default QuiSuisJe;