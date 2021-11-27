import React from 'react';
import '../Header/NavBar.scss'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>                    
                    <li>
                        <Link to="/QuiSuisJe">Qui suis-je ?</Link>
                    </li>  
                    <li>
                        <Link to="/Projets">Projets</Link>
                    </li>  
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>  
                </ul>
            </nav>
        </header>
    )
}

export default Header;