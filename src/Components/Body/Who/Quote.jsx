import React from 'react';
import '../Who/Quote.scss';
// import { Zoom } from 'react-reveal';
import { Zoom } from "react-reveal";

const Quote = () => {
    return (
        <section className='quote-who'>
            <Zoom delay={100} duration={1000}>
                <span>In love with !Error handling response: TypeError:!</span>
            </Zoom>
        </section>

    );
};

export default Quote;