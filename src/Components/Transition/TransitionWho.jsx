import React, {useRef, useEffect} from 'react'
import './TransitionWho.scss'


const TransitionWho = ({timeline}) => {


    const transWho = useRef(null);
    const transWho1 = useRef(null);
    const transWho2 = useRef(null);
    const transWho3 = useRef(null);


    useEffect(() => {
        timeline.to(transWho.current, {
            duration: 0.4,
            x: 2000,
        },);
        timeline.to(transWho1.current, {
            duration: 0.4,
            x: 2000,
        },);
        timeline.to(transWho2.current, {
            duration: 0.4,
            x: 2000,
        },);
        timeline.to(transWho3.current, {
            duration: 0.4,
            x: 2000,
        },);
        
    })
    return (
        <div>
           <div className="transition-Who" ref={transWho}></div> 
           <div className="transition-Who1" ref={transWho1}></div> 
           <div className="transition-Who2" ref={transWho2}></div> 
           <div className="transition-Who3" ref={transWho3}></div> 
        </div>
    )
}

export default TransitionWho;