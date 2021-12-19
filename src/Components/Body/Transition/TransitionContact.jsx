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
        
                            timeline.to(".colonne-1-contact", {
                                duration: .9,
                                width: "0%",
                                ease: "Power3.easeOut",
                            },);
                            timeline.to(".colonne-2-contact", {
                                duration: .9,
                                width: "0%",
                                ease: "Power3.easeOut",
                            },"-=1");
                            timeline.to(".colonne-3-contact", {
                                duration: .9,
                                width: "0%",
                                ease: "Power3.easeOut",
                            },"-=1.1");
                            timeline.to(".colonne-4-contact", {
                                duration: .9,
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