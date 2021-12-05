import React, {useRef, useEffect} from 'react'
import './TransitionProjet.scss'


const TransitionProjet = ({timeline}) => {


    const transProjet = useRef(null);
    const transProjet1 = useRef(null);
    const transProjet2 = useRef(null);
    const transProjet3 = useRef(null);


    useEffect(() => {
        timeline.to(transProjet.current, {
            duration: 0.4,
            y: -2000,
        },);
        timeline.to(transProjet1.current, {
            duration: 0.4,
            y: -2000,
        },);
        timeline.to(transProjet2.current, {
            duration: 0.4,
            y: -2000,
        },);
        timeline.to(transProjet3.current, {
            duration: 0.4,
            y: -2000,
        },);
        
    })
    return (
        <div>
           <div className="transition-Projet" ref={transProjet}></div> 
           <div className="transition-Projet1" ref={transProjet1}></div> 
           <div className="transition-Projet2" ref={transProjet2}></div> 
           <div className="transition-Projet3" ref={transProjet3}></div> 
        </div>
    )
}

export default TransitionProjet;