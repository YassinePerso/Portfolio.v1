import React, { useRef, useEffect } from 'react';
import '../Components/Title.css'
import { gsap } from 'gsap';
// import { TweenLite } from 'gsap/TweenLite';


const Title = () => {

    const yassineTitle = useRef(null)
    const webdevTitle = useRef(null)
    const frontendTitle = useRef(null)
    const reactTitle = useRef(null)
    const line1 = useRef(null)
    const line2 = useRef(null)
    const line3 = useRef(null)

    useEffect(() => {
        gsap.from(yassineTitle.current, {
            opacity: 0,
            y: 80,
    }
    )
        gsap.to(yassineTitle.current, {
                opacity: 1,
                duration: 3,
                y: 0,
        }
        )
    }, [])

    useEffect(() => {
        gsap.from(webdevTitle.current, {
            opacity: 0,
            y: 80,
    }
    )
        gsap.to(webdevTitle.current, {
                opacity: 1,
                duration: 2,
                y: 0,
        }
        )
    }, [])

    useEffect(() => {
        gsap.from(frontendTitle.current, {
            opacity: 0,
            y: 80,
    }
    )
        gsap.to(frontendTitle.current, {
                opacity: 1,
                duration: 1,
                y: 0,
        }
        )
    }, [])

    useEffect(() => {
        gsap.from(reactTitle.current, {
            opacity: 0,
            y: -100,
            rotate: 60,
    }
    )
        gsap.to(reactTitle.current, {
                opacity: 1,
                duration: 4,
                y: 0,
        }
        )
    }, [])

    useEffect(() => {
        gsap.from(line1.current, {
            opacity: 0,
            width: 0,
    }
    )
        gsap.to(line1.current, {
                opacity: 1,
                duration: 2,
                width: 350,
        }
        )
    }, [])

    useEffect(() => {
        gsap.from(line2.current, {
            opacity: 0,
            width: 0,
    }
    )
        gsap.to(line2.current, {
                opacity: 1,
                duration: 2,
                width: 500,
        }
        )
    }, [])

    useEffect(() => {
        gsap.from(line3.current, {
            opacity: 0,
            width: 0,
    }
    )
        gsap.to(line3.current, {
                opacity: 1,
                duration: 2,
                width: 350,
        }
        )
    }, [])

    return (
        <main className="main-left">
            <section className="left-side">
            <div className="yassine">
                <p ref={yassineTitle}>Yassine</p>
                <div ref={line1} className="line-1"></div>
            </div>
            <div className="web-dev">
                <p ref={webdevTitle}>Web-dev</p>
                <div ref={line2} className="line-2"></div>
            </div>
            <div className="front-end">
                <p ref={frontendTitle}>Front-end</p>
                <div ref={line3} className="line-3"></div>
            </div>
            </section>

            <div className="line-middle"></div>

            <section className="right-side">
                <div className="react-js">
                    <p ref={reactTitle}>React.js</p>
                </div>
            </section>
        </main>
    )
}

export default Title;