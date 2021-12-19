import React from 'react';
import Hprojets from '../Body/Projets/Hprojets';
import NavBar from '../Header/NavBar'
import gsap from 'gsap';
import TransitionProjets from '../Body/Transition/TransitionProjets';
import Bar from '../Body/Projets/Bar';
import FirstPro from '../Body/Projets/FirstPro';
import SecondPro from '../Body/Projets/SecondPro';
import ThirdPro from '../Body/Projets/ThirdPro';
import FourthPro from '../Body/Projets/FourthPro';



const Projets = () => {


    let timeline = gsap.timeline();

    return (
        <>
        <TransitionProjets timeline={timeline} />
        <NavBar timeline={timeline}/>
        <Hprojets timeline={timeline}/>
        <Bar />
        <FirstPro/>
        <Bar />
        <SecondPro  />
        <Bar  />
        <ThirdPro />
        <Bar />
        <FourthPro />
        <Bar />
        </>
    )
}

export default Projets;