import React, { useRef, useEffect } from 'react';
import '../Components/Title.css'
// import gsap from 'gsap';
// import { TweenLite } from 'gsap/TweenLite';


const Title = ({timeline}) => {

    let yassineTitle = useRef(null)
    let webdevTitle = useRef(null)
    let frontendTitle = useRef(null)
    let reactTitle = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)

    useEffect (() => {
        timeline.from(yassineTitle, {
            delay: 0.15,
            duration: 0.5,
            opacity: 0,
            y: 50,
        })
        timeline.from(line1, {
            // delay:,
            duration: 0.7,
            opacity: 0,
            width: 0,
            // y: 80,
        })
        timeline.from(webdevTitle, {
            delay: 0.10,
            duration: 0.5,
            opacity: 0,
            y: 50,
        })
        timeline.from(reactTitle, {
            // delay: 0.20,
            duration: 0.5,
            opacity: 0,
            y: 50,
        })
        timeline.from(line2, {
            // delay: 0.01,
            duration: 0.8,
            // opacity: 0,
            width: 0,
            // y: 80,
        })
        timeline.from(frontendTitle, {
            delay: 0.10,
            duration: 0.5,
            opacity: 0,
            y: 50,
        })
        timeline.from(line3, {
            // delay: 0.01,
            duration: 0.8,
            // opacity: 0,
            width: 0,
            // y: 80,
        })
    })

    return (
        <main className="main-left">
            <section className="left-side">
            <div className="yassine">
                <p ref={el => yassineTitle = el}>Yassine</p>
                <div ref={el => line1 = el} className="line-1"></div>
            </div>
            <div className="web-dev">
                <p ref={el => webdevTitle = el}>Web-dev</p>
                <div ref={el => line2 = el} className="line-2"></div>
            </div>
            <div className="front-end">
                <p ref={el => frontendTitle = el}>Front-end</p>
                <div ref={el => line3 = el} className="line-3"></div>
            </div>
            </section>

            <div className="line-middle"></div>

            <section className="right-side">
                <div className="react-js">
                    <p ref={el => reactTitle = el}>React.js</p>
                </div>
            </section>
        </main>
    )
}

export default Title;