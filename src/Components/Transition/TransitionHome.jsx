import React, {useRef, useEffect} from 'react'
import './TransitionHome.scss'


const TransitionHome = ({timeline}) => {


    const trans = useRef(null);
    const trans1 = useRef(null);
    const trans2 = useRef(null);
    const trans3 = useRef(null);


    useEffect(() => {
        timeline.to(trans.current, {
            duration: 1.3,
            x: 2000,
        },"-=1.2");
        timeline.to(trans1.current, {
            duration: 1.3,
            x: -2000,
        },"-=1.2");
        timeline.to(trans2.current, {
            duration: 1.3,
            x: 2000,
        },"-=1.2");
        timeline.to(trans3.current, {
            duration: 1.3,
            x: -2000,
        },"-=1.2");
        
    })
    return (
        <div>
           <div className="transition-effect" ref={trans}></div> 
           <div className="transition-effect1" ref={trans1}></div> 
           <div className="transition-effect2" ref={trans2}></div> 
           <div className="transition-effect3" ref={trans3}></div> 
        </div>
    )
}

export default TransitionHome