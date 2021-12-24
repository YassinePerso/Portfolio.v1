import React, { useRef } from 'react';
import Hprojets from '../Body/Projets/Hprojets';
import NavBar from '../Header/NavBar'
import gsap from 'gsap';
import TransitionProjets from '../Body/Transition/TransitionProjets';
import Bar from '../Body/Projets/Bar';
import FirstPro from '../Body/Projets/FirstPro';
import SecondPro from '../Body/Projets/SecondPro';
import ThirdPro from '../Body/Projets/ThirdPro';
import FourthPro from '../Body/Projets/FourthPro';
import Technos from '../Body/Projets/Technos';
import FooterScroll from '../Footer/FooterScroll';
import TitleTechnos from '../Body/Projets/TitleTechnos';





const Projets = () => {

    let bar = useRef(null);
    let timeline = gsap.timeline();

    return (
        <>
        <TransitionProjets timeline={timeline} />
        <NavBar timeline={timeline}/>
        <Hprojets timeline={timeline}/>
        <TitleTechnos />
        <Technos />
        <Bar ref={bar} />
        <FirstPro/>
        <Bar ref={bar}/>
        <SecondPro />
        <Bar  ref={bar}/>
        <ThirdPro />
        <Bar ref={bar} />
        <FourthPro />
        <Bar ref={bar}/>
        <FooterScroll />
        </>
    )
}

export default Projets;