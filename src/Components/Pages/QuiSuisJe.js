import React from 'react';
import NavBar from '../Header/NavBar'
import TransitionWho from '../Transition/TransitionWho';
import gsap from 'gsap';

const QuiSuisJe = () => {


    const Who = gsap.timeline();

    return (
        <>
        <TransitionWho timeline={Who}/>
            <NavBar />
            <p>qui suis-je ?</p>
        </>
    )
}

export default QuiSuisJe;