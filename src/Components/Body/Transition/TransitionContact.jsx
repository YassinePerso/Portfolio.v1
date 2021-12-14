import React, { useEffect } from 'react';
import '../Transition/TransitionContact.scss';



const TransitionContact = ({timeline}) => {


    useEffect(() => {
        timeline.from(".transition-contact", {
            
            duration: 1,
            top: "100%",
            ease: "Power3.easeOut",
        });
        timeline.from(".colonne-1-contact", {
            
            duration: .9,
            top: "100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");
        timeline.from(".colonne-2-contact", {
            
            duration: .9,
            top: "100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");
        timeline.from(".colonne-3-contact", {
            duration: .9,
            top: "100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");
        timeline.from(".colonne-4-contact", {
            duration: .9,
            top: "100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");
        // timeline.from(".colonne-5", {
        //     duration: 1,
        //     top: "100%",
        //     ease: "Power3.easeOut",
        //     delay: .3,
        // }, "-=1");
        // timeline.from(".colonne-6", {
        //     duration: 1,
        //     top: "100%",
        //     ease: "Power3.easeOut",
        //     delay: .3,
        // }, "-=1");
        // timeline.from(".colonne-7", {
        //     duration: 1,
        //     top: "100%",
        //     ease: "Power3.easeOut",
        //     delay: .3,
        // }, "-=1");
        // timeline.from(".colonne-8", {
        //     duration: 1,
        //     top: "100%",
        //     ease: "Power3.easeOut",
        //     delay: .3,
        // }, "-=1");
    // });
    // timeline.from(
    //     ".navbar-contact > div", {
    //         x: "-200",
    //         opacity: 0,
    //         ease: "Power3.easeOut",
    //     },);
        //----------------- A EFFACER ---------------------- //
        // timeline.from(
        //     ".images-contact > div", {
        //         // y: "300",
        //         scale: 0,
        //         opacity: 0,
        //         ease: "Power3.easeOut",
        //         stagger: {
        //             amount: .6,
        //         }
        //     },);
                
                // timeline.to(
                    //     ".navbar > div", {
                        //         x: "80",
                        //         opacity: 0,
                        //         scale: .2,
                        //         ease: "Power3.easeOut",
                        //     },);
                        
                        //----------------- A EFFACER ---------------------- //
                        // timeline.to(
                        //     ".images-contact > div", {
                        //         scale: "0",
                        //         opacity: 0,
                        //         ease: "Power3.easeOut",
                        //         stagger: {
                        //             amount: .5,
                        //         }
                        //     },);
                            // //----------------- A EFFACER ---------------------- //
                            // timeline.to(
                            //     ".navbar-contact > div", {
                            //         x: "-200",
                            //         opacity: 0,
                            //         ease: "Power3.easeOut",
                            //     },);
                            timeline.to(".colonne-1-contact", {
                                duration: .9,
                                // left: "100%",
                                width: "0%",
                                ease: "Power3.easeOut",
                            },);
                            timeline.to(".colonne-2-contact", {
                                duration: .9,
                                // left: "100%",
                                width: "0%",
                                ease: "Power3.easeOut",
                            },"-=1");
                            timeline.to(".colonne-3-contact", {
                                duration: .9,
                                // left: "100%",
                                width: "0%",
                                ease: "Power3.easeOut",
                            },"-=1.1");
                            timeline.to(".colonne-4-contact", {
                                duration: .9,
                                // left: "100%",
                                width: "0%",
                                ease: "Power3.easeOut",
                            },"-=1.2");
            
                            timeline.to(".transition-contact", {
                                delay: 3,
                                duration: .9,
                                left: "-100%",
                                ease: "Power3.easeOut",
                            }, "-=3");
                        });
                        
                        
                        
                        return (
                            <>
        <div class="transition-contact">
				
                <div className="colonne-1-contact"></div>
                <div className="colonne-2-contact"></div>
                <div className="colonne-3-contact"></div>
                <div className="colonne-4-contact"></div>
			</div>
            </>
    );
};

export default TransitionContact;