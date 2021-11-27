import React from "react";
import './Footer.scss'
import localisation from '../Pictures/pin.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer-network">
                
            </div>
            <div className="localisation">
                <img src={localisation} alt="" />
                <p>Paris</p>
            </div>
        </footer>
    )
}

export default Footer;