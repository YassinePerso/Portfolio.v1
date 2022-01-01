import React from "react";
import './Footer.scss'
import localisation from '../Pictures/pin.png';

const Footer = () => {
    return (
        <footer className="yz">
            <div className="footer-network">
                <img src={localisation} alt="" />
                <p>Paris</p>
            </div>
            <div className="localisation"></div>
        </footer>
    )
}

export default Footer;