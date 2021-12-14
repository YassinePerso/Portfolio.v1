import React, { useEffect } from 'react';
import '../Transition/TransitionProjets.scss';



const TransitionProjets = ({timeline}) => {


    useEffect(() => {
        timeline.from(".transition-projets", {
            duration: .9,
            top: "-100%",
            ease: "Power3.easeOut",
        });

        timeline.from(".colonne-1-projets", {
            duration: .9,
            top: "-100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");

        timeline.from(".colonne-2-projets", {
            duration: .9,
            top: "-100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");
        timeline.from(".colonne-3-projets", {
            duration: .9,
            top: "-100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");
        timeline.from(".colonne-4-projets", {
            duration: 1,
            top: "-100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");
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
                            timeline.to(".colonne-1-projets", {
                                duration: .8,
                                // left: "100%",
                                width: "-0%",
                                ease: "Power3.easeOut",
                            },"-=.5");
                            timeline.to(".colonne-2-projets", {
                                duration: .8,
                                // left: "100%",
                                width: "-0%",
                                ease: "Power3.easeOut",
                            },"-=.5");
                            timeline.to(".colonne-3-projets", {
                                duration: .8,
                                // left: "100%",
                                width: "-0%",
                                ease: "Power3.easeOut",
                            },"-=.5");
                            timeline.to(".colonne-4-projets", {
                                duration: .8,
                                // left: "100%",
                                width: "-0%",
                                ease: "Power3.easeOut",
                            },"-=.5");

                            timeline.to(".transition-projets", {
                                delay: 3,
                                duration: .9,
                                left: "100%",
                                ease: "Power3.easeOut",
                            },"-=3");
                        });
                        
                        
                        
                        return (
                            <>
        <div class="transition-projets">
				{/* <div class="images-who">
					<div class="img-contact img-1" alt="photo"></div>
					<div class="img-contact img-2" alt="photo"></div>
					<div class="img-contact img-3" alt="photo"></div>
					<div class="img-contact img-4" alt="photo"></div>
					<div class="img-contact img-5" alt="photo"></div>
				</div> */}
                <div className="colonne-1-projets"></div>
                <div className="colonne-2-projets"></div>
                <div className="colonne-3-projets"></div>
                <div className="colonne-4-projets"></div>
			</div>
            </>
    );
};

export default TransitionProjets;