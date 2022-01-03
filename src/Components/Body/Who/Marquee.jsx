import React from 'react';
import '../Who/Marquee.scss';
import Fade from "react-reveal/Fade";


const Marquee = () => {


    return (
      <Fade right delay={100} duration={1000}>
        <section className="marquee-container">
            <div className="marquee">S
                MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - 
            </div>
        </section>
        </Fade>
    );
};

export default Marquee;