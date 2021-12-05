import React from 'react';
import NavBar from '../Header/NavBar'

import TransitionProjet from '../Transition/TransitionProjet';
import gsap from 'gsap';

const Projets = () => {

    const projet = gsap.timeline();

    return (
        <div>
            <TransitionProjet  timeline={projet} />
            <NavBar />
            <p>Projets</p>
        </div>
    )
}

export default Projets;