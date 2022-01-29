import React from 'react';


import Hprojets from '../Body/Projets/Hprojets';
import NavBar from '../Header/NavBar'
import TransitionProjets from '../Body/Transition/TransitionProjets';
import Bar from '../Body/Projets/Bar';
import FirstPro from '../Body/Projets/FirstPro';
import SecondPro from '../Body/Projets/SecondPro';
import ThirdPro from '../Body/Projets/ThirdPro';
import FourthPro from '../Body/Projets/FourthPro';
import Technos from '../Body/Projets/Technos';
import TitleTechnos from '../Body/Projets/TitleTechnos';
import ContactFooter from '../Footer/ContactFooter';
import gsap from 'gsap';
import FifthPro from '../Body/Projets/FifthPro';


const Projets = () => {

    let timeline = gsap.timeline();

    return (
        <section className='container-projets-page'>
  
        <TransitionProjets timeline={timeline} />
        <NavBar timeline={timeline}/>
        <TitleTechnos/>
        <Technos />
            <Hprojets timeline={timeline}/>
        <Bar />
        <FirstPro />
        <Bar />
        <SecondPro />
        <Bar/>
        <ThirdPro />
        <Bar />
        <FourthPro />
        <Bar/>
        <FifthPro />
        <Bar />
        <ContactFooter />
        </section>
    )
}

export default Projets;