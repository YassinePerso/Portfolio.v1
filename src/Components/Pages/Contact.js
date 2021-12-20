import React from 'react';
import NavBar from '../Header/NavBar';
import KeepTouch from '../Body/contact/KeepTouch';
import gsap from 'gsap';
import TransitionContact from '../Body/Transition/TransitionContact';
import ContactFooter from '../Footer/ContactFooter';

const Contact = () => {

    let timeline = gsap.timeline();


    return (
        <>
        <TransitionContact timeline={timeline} />
        <NavBar timeline={timeline} />
        <KeepTouch />
        <ContactFooter />
        </>
    )
}

export default Contact;