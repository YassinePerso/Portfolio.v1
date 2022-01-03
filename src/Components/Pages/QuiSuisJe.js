import React from 'react';
import NavBar from '../Header/NavBar'
import gsap from 'gsap';
import Presentation from '../Body/Who/Presentation';
import TransitionWho from '../Body/Transition/TransitionWho';
import Marquee from '../Body/Who/Marquee';
import ContactFooter from '../Footer/ContactFooter'
import BarWho from '../Body/Who/BarWho'
import Quote from '../Body/Who/Quote';
import Stack from '../Body/Who/Stack';

const QuiSuisJe = () => {

    let timeline = gsap.timeline();


    return (
        <>
            <TransitionWho timeline={timeline} />
            <NavBar timeline={timeline} />
            <Presentation timeline={timeline} />
            <BarWho />
            <Quote />
            <BarWho />
            <Marquee />
            <Stack />
            <ContactFooter />
        </>
    )
}

export default QuiSuisJe;