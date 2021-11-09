import React, { useEffect, useRef } from 'react';
import '../Components/Header.css'
import { Power2 } from 'gsap';
import { Link } from 'react-router-dom';

const Header = ({timeline}) => {


    let Accueil = useRef(null);
    let QuiSuisJe = useRef(null);
    let Projets = useRef(null);
    let Contact = useRef(null);

    useEffect (() => {
        timeline.from(Accueil, {
            duration: 0.4,
            opacity: 0,
            y: 70,
            ease: Power2.easeOut,
        })
        timeline.from(QuiSuisJe, {
            delay: 0.002,
            duration: 0.4,
            opacity: 0,
            y: 70,
            ease: Power2.easeOut,
        })
        timeline.from(Projets, {
            delay: 0.003,
            duration: 0.4,
            opacity: 0,
            y: 70,
            ease: Power2.easeOut,
        })
        timeline.from(Contact, {
            delay: 0.004,
            duration: 0.4,
            opacity: 0,
            y: 70,
            ease: Power2.easeOut,
        })
    })

    return (
        <header>
            <nav>
                <ul>
                    <li ref={el => Accueil = el}>
                        <Link to="/">Accueil</Link>
                    </li>                    
                    <li ref={el => QuiSuisJe = el}>
                        <Link to="/QuiSuisJe">Qui suis-je ?</Link>
                    </li>  
                    <li ref={el => Projets = el}>
                        <Link to="/Projets">Projets</Link>
                    </li>  
                    <li ref={el => Contact = el}>
                        <Link to="/Contact">Contact</Link>
                    </li>  
                </ul>
            </nav>
        </header>
    )
}

export default Header;