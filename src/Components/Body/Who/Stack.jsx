import React from 'react';
import '../Who/Stack.scss';
import { Zoom } from "react-reveal";
import Fade from "react-reveal/Slide";

const Stack = () => {
    return (
        <section className="container-stack">

                    {/********* FRONT & BACK ************/}
            <section className="container-front-and-back">
                {/* FRONT */}
            <div className="left-container-front">
                   <Fade bottom duration={1000} delay={200}>
                <div className="title-front-f">
                    <span>Front stack :</span>
                </div>
                    </Fade>
                <div className="all-front-stack">
                    <Zoom delay={50} >
                    <span>- HTML5</span>
                    </Zoom>
                    <Zoom delay={100}>
                    <span>- CSS3</span>
                    </Zoom>
                    <Zoom delay={150}>
                    <span>- SASS - SCSS</span>
                    </Zoom>
                    <Zoom delay={200}>
                    <span>- Javascript</span>
                    </Zoom>
                    <Zoom delay={250}>
                    <span>- React.js</span>
                    </Zoom>
                    <Zoom delay={300}>
                    <span>- Redux</span>
                    </Zoom>
                    <Zoom delay={350}>
                    <span>- Next.js</span>
                    </Zoom>
                    <Zoom delay={400}>
                    <span>- GSAP/Greensock</span>
                    </Zoom>
                    <Zoom delay={450}>
                    <span>- UiKIT</span>
                    </Zoom>
                    {/* <Zoom delay={500}>
                    <span>- Responsive</span>
                    </Zoom>
                    <Zoom delay={550}>
                    <span>- SEO</span>
                    </Zoom> */}
                </div>
            </div>
                    {/* BAR-MIDDLE */}
            <div className="bar-middle-stack">
            <Zoom delay={400} duration={1000}>
                <div className="bar-stack-s"></div>
            </Zoom>
            </div>
                        {/* BACK */}
            <div className="right-container-back">
            <Fade bottom duration={1000} delay={200}>
            <div className="title-back-b">
                    <span>Back stack :</span>
            </div>
            </Fade>
            <div className="all-back-stack">
            <Zoom delay={50} >
                    <span>- MySQL</span>
            </Zoom>
                </div>
            </div>
            </section>

                 {/********** BAR SEPARATIGN STACK FROM TOOLS **************/}
            <div className="bar-between-two">
            <Zoom delay={200} duration={1000}>
                <div className="bar-s-t"></div>
            </Zoom>
            </div>

                  {/********************* TOOLS CONTAINER **********************/}
            <section className="container-tools">
            <div className="title-tools-t">
            <Zoom delay={400} duration={1000}>
                    <span>Outils :</span>
            </Zoom>
            </div>
            <div className="tools">
            <Zoom delay={400} duration={1000}>
                    <span>Git</span>
                    </Zoom>
                    <Zoom delay={400} duration={1000}>
                    <span>Github</span>
                    </Zoom>
                    <Zoom delay={400} duration={1000}>
                    <span>Terminal</span>
                    </Zoom>
            </div>
            </section>
        </section>
    );
};

export default Stack;