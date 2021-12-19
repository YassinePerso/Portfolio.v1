import React, { useEffect } from 'react';
import '../Transition/TransitionWho.scss';



const TransitionWho = ({timeline}) => {


    useEffect(() => {
        timeline.from(".transition-who", {
            
            duration: 1,
            top: "100%",
            ease: "Power3.easeOut",
        });
        timeline.from(".colonne-1-who", {
            
            duration: .9,
            top: "100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");
        timeline.from(".colonne-2-who", {
            
            duration: .9,
            top: "100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");
        timeline.from(".colonne-3-who", {
            duration: .9,
            top: "100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");
        timeline.from(".colonne-4-who", {
            duration: .9,
            top: "100%",
            ease: "Power3.easeOut",
            delay: .3,
        }, "-=1");
        
                            timeline.to(".colonne-1-who", {
                                duration: .9,
                                // left: "100%",
                                top: "100%",
                                ease: "Power3.easeOut",
                            },);
                            timeline.to(".colonne-2-who", {
                                duration: .9,
                                // left: "100%",
                                top: "100%",
                                ease: "Power3.easeOut",
                            },"-=1");
                            timeline.to(".colonne-3-who", {
                                duration: .9,
                                // left: "100%",
                                top: "100%",
                                ease: "Power3.easeOut",
                            },"-=1.1");
                            timeline.to(".colonne-4-who", {
                                duration: .9,
                                // left: "100%",
                                top: "100%",
                                ease: "Power3.easeOut",
                            },"-=1.2");
            
                            timeline.to(".transition-who", {
                                delay: 3,
                                duration: .9,
                                left: "-100%",
                                ease: "Power3.easeOut",
                            }, "-=3");
                        });
                        
                        
                        
                        return (
                            <>
        <div class="transition-who">
				
                <div className="colonne-1-who"></div>
                <div className="colonne-2-who"></div>
                <div className="colonne-3-who"></div>
                <div className="colonne-4-who"></div>
			</div>
            </>
    );
};

export default TransitionWho;