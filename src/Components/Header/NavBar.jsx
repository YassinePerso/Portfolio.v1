import React from 'react';
import '../Header/NavBar.scss'
import { Link } from 'react-router-dom';
import logo from '../Pictures/logo.png'

const Header = () => {

    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} width="60" height="60" alt="logo" />
                </div>
                <ul className="links">
                    <li className="nav-item">
                        <Link to="/">Accueil</Link>
                    </li>               
                    <li className="nav-item">
                        <Link to="/QuiSuisJe">Qui suis-je ?</Link>
                    </li>  
                    <li className="nav-item">
                        <Link to="/Projets">Projets</Link>
                    </li>  
                </ul>
                <section className="contact-link">
                    <li>
                        <Link to="/Contact" className="contact-item">Contact</Link>
                    </li>  
                </section>

            </nav>
        </header>
    )
}

export default Header;