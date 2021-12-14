import React from 'react';
import NavBar from '../Header/NavBar';
import KeepTouch from '../Body/contact/KeepTouch';
import gsap from 'gsap';
import TransitionContact from '../Body/Transition/TransitionContact';

const Contact = () => {

    let timeline = gsap.timeline();


    return (
        <>
        <TransitionContact timeline={timeline} />
        <NavBar />
        <KeepTouch />
        </>
    )
}

export default Contact;