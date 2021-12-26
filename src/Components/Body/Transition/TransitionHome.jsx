import React, { useEffect } from 'react';
import '../Transition/TransitionHome.scss';



const TransitionHome = ({timeline}) => {


    useEffect(() => {
        timeline.from(".transition-home", {
            
            duration: 1,
            top: "100%",
            ease: "Power3.easeOut",
        });
        timeline.from(".colonne-1-home", {
            
            duration: .9,
            top: "100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");
        timeline.from(".colonne-2-home", {
            
            duration: .9,
            bottom: "100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");
        timeline.from(".colonne-3-home", {
            duration: .9,
            top: "100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");
        timeline.from(".colonne-4-home", {
            duration: .9,
            bottom: "100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");
        
                            timeline.to(".colonne-1-home", {
                                duration: .9,
                                width: "0%",
                                ease: "Power3.easeOut",
                            },);
                            timeline.to(".colonne-2-home", {
                                duration: .9,
                                width: "0%",
                                ease: "Power3.easeOut",
                            },"-=1");
                            timeline.to(".colonne-3-home", {
                                duration: .9,
                                width: "0%",
                                ease: "Power3.easeOut",
                            },"-=1.1");
                            timeline.to(".colonne-4-home", {
                                duration: .9,
                                width: "0%",
                                ease: "Power3.easeOut",
                            },"-=1.2");
            
                            timeline.to(".transition-home", {
                                delay: 3,
                                duration: .9,
                                left: "-100%",
                                ease: "Power3.easeOut",
                            }, "-=3");
                        });
                        
                        
                        
                        return (
                            <>
        <div class="transition-home">
				
                <div className="colonne-1-home"></div>
                <div className="colonne-2-home"></div>
                <div className="colonne-3-home"></div>
                <div className="colonne-4-home"></div>
			</div>
            </>
    );
};

export default TransitionHome;