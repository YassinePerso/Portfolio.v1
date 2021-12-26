import React, { useEffect, useRef } from "react";
import "../homepage/Title.scss";
import { Power3 } from 'gsap';
import gsap from "gsap";

const Title = () => {

    let timeline = gsap.timeline();


     ////  FIRST ANIMATION ////
  let blockOne = useRef(null)
  let blockTwo = useRef(null)
  let blockThird = useRef(null)
  let blockFourth = useRef(null)
  let blockFifth = useRef(null)
  let blockSixth = useRef(null)
  let blockSeventh = useRef(null)

   


  useEffect(() => {
    timeline.from(".block", {
      scale: 5,
      duration: 1.2,
      opacity: 0,
      y: 290,
      stagger: 0.15,
      ease: Power3.easeOut
    },);
    // BLOCK 7
    timeline.to(blockSeventh, {
      duration: 1.8,
      x: "380",
      y: "350",
      scale: "0.3",
      ease: Power3.easeOut,
    }, "+=.7");
    // BLOCK 6
    timeline.to(blockSixth, {
      duration: 1.8,
      x: "460",
      y: "285",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
    // BLOCK 5
    timeline.to(blockFifth, {
      duration: 1.8,
      x: "520",
      y: "220",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
    // BLOCK 4
    timeline.to(blockFourth, {
      duration: 1.8,
      x: "570",
      y: "150",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
    // BLOCK 3
    timeline.to(blockThird, {
      duration: 1.8,
      x: "640",
      y: "80",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
    // BLOCK 2
    timeline.to(blockTwo, {
      duration: 1.8,
      x: "730",
      y: "10",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
    // BLOCK 1
    timeline.to(blockOne, {
      duration: 1.8,
      x: "820",
      y: "-50",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");

    /////  LEFT SIDE ANIMATION  //////
    // timeline.from(".left-1 > span", {
    //   y: 200,
    //   delay: 5,
    // })
    // timeline.from(".text-left-title2", {
    //   y: 200,
    //   delay: 5,
    // })
    // timeline.from(".text-left-title3", {
    //   y: 200,
    //   delay: 5,
    // })
    // timeline.from(".text-left-title4", {
    //   y: 200,
    //   delay: 5,
    // })
    ///////   -- TO --    //////
    // timeline.to(".left-1 > span", {
    //   y: 0,
    //   delay: 5,
    // })
    // timeline.to(".text-left-title2", {
    //   y: 0,
    //   delay: 5,
    // })
    // timeline.to(".text-left-title3", {
    //   y: 0,
    //   delay: 5,
    // })
    // timeline.to(".text-left-title4", {
    //   y: 0,
    //   delay: 5,
    // })
  });
  
  
  return (
    <main className="container-title">

      {/* LEFT */}
      <section className="leftSideTitle">
        <div className="left-1">
        <p><span class="text">FRENCH</span></p>
        </div>
        <div className="left-2">
        <p><span class="text">& COOL,</span></p>
        </div>
        <div className="left-3">
        <p><span class="text">FRONT</span></p>
        </div>
        <div className="left-4">
        <p><span class="text">DEV-WEB</span></p>
        </div>
      </section>

      {/* MIDDLE */}
      <section className="middle">
        <div className="haut-middle">
          <div class="blocks">
            <div class="block-1 block" ref={el => blockOne = el}>Y</div>
            <div class="block-2 block" ref={el => blockTwo = el}>A</div>
            <div class="block-3 block" ref={el => blockThird = el}>S</div>
            <div class="block-4 block" ref={el => blockFourth = el}>S</div>
            <div class="block-5 block" ref={el => blockFifth = el}>I</div>
            <div class="block-6 block" ref={el => blockSixth = el}>N</div>
            <div class="block-7 block" ref={el => blockSeventh = el}>E</div>
          </div>
    
        </div>
       

      </section>

        {/* RIGHT */}
      <section className="rightSideTitle">
        <section className="right-1">

        </section>
      </section>

    </main>
  );
};

export default Title;

