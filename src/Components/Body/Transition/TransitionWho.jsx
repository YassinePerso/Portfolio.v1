import React, { useEffect } from 'react';
import '../Transition/TransitionWho.scss';



const TransitionWho = ({timeline}) => {


    useEffect(() => {
        timeline.from(".transition-who", {
            duration: 1,
            top: "100%",
            ease: "Power3.easeOut",
        });
    // });
    timeline.from(
        ".navbar-who > div", {
            x: "-200",
            opacity: 0,
            ease: "Power3.easeOut",
        },);
        //----------------- A EFFACER ---------------------- //
        timeline.from(
            ".images-who > div", {
                // y: "300",
                scale: 0,
                opacity: 0,
                ease: "Power3.easeOut",
                stagger: {
                    amount: .6,
                }
            },);
                
                // timeline.to(
                    //     ".navbar > div", {
                        //         x: "80",
                        //         opacity: 0,
                        //         scale: .2,
                        //         ease: "Power3.easeOut",
                        //     },);
                        
                        //----------------- A EFFACER ---------------------- //
                        timeline.to(
                            ".images-who > div", {
                                scale: "0",
                                opacity: 0,
                                ease: "Power3.easeOut",
                                stagger: {
                                    amount: .5,
                                }
                            },);
                            // //----------------- A EFFACER ---------------------- //
                            timeline.to(
                                ".navbar-who > div", {
                                    x: "-200",
                                    opacity: 0,
                                    ease: "Power3.easeOut",
                                },);
                            timeline.to(".transition-who", {
                                duration: .9,
                                top: "-100%",
                                ease: "Power3.easeOut",
                            });
                        });
                        
                        
                        
                        return (
                            <>
        <div class="transition-who">
				
				<div class="images-who">
					<div class="img-who img-1" alt="photo"></div>
					<div class="img-who img-2" alt="photo"></div>
					<div class="img-who img-3" alt="photo"></div>
					<div class="img-who img-4" alt="photo"></div>
					<div class="img-who img-5" alt="photo"></div>
				</div>
				<div class="navbar-who">
					<div class="site-title">Work</div>
					<div class="site-icon">-</div>
					<div class="site-type">Projects</div>
				</div>
			</div></>
    );
};

export default TransitionWho;