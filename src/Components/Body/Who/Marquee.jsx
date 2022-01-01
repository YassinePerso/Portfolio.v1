import React, { useRef, useEffect } from 'react';
import '../Who/Marquee.scss';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Marquee = () => {

    const titleRef = useRef();
    ////////////////////
    const onLoad = () => {
        gsap.timeline({
          onComplete: function () {
            console.log('animation terminée')
          }
        })
          .fromTo(".marquee-container",
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.33,
            delay: 0.7
          }      
        )
        .to(window, {     
          y: titleRef.current.clientWidth, 
          duration: 0.5,
        //   scrollTo: ".marquee"
        })
      }
    ////////////////////
    useEffect(() => {
        onLoad()
    }, [])
    useEffect(() => {
        slideInTop(".marquee")
    }, [])

    const slideInTop = (elem, delay, duration) => {
        gsap.fromTo(
          elem,
          {
            y: 200,
          },
          {
            y: 0,
            delay: delay || 0.4,
            duration: duration || 0.6,
            scrollTrigger: {
              trigger: elem,
              scrub: true,
              start: "top center",
              end: "bottom center"
            }
          }
        )
      }


    return (
        <section className="marquee-container" ref={titleRef}>
            <div className="marquee" ref={titleRef}>
                MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - MY STACK - 
            </div>
        </section>
    );
};

export default Marquee;