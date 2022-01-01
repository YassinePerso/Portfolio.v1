import React from 'react';
import NavBar from '../Header/NavBar'
import gsap from 'gsap';
import Presentation from '../Body/Who/Presentation';
import TransitionWho from '../Body/Transition/TransitionWho';
import Marquee from '../Body/Who/Marquee';
import CV from '../Body/Who/CV';
import ContactFooter from '../Footer/ContactFooter'

const QuiSuisJe = () => {

    let timeline = gsap.timeline();


    return (
        <>
            <TransitionWho timeline={timeline} />
            <NavBar timeline={timeline} />
            <Presentation timeline={timeline} />
            <Marquee />
            <CV />
            <ContactFooter />
        </>
    )
}

export default QuiSuisJe;