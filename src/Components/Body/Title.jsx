import React, { useEffect, useRef } from "react";
import "../Body/Title.scss";
import { Power3 } from 'gsap';

const Title = ({timeline}) => {



  let blockOne = useRef(null)
  let blockTwo = useRef(null)
  let blockThird = useRef(null)
  let blockFourth = useRef(null)
  let blockFifth = useRef(null)
  let blockSixth = useRef(null)
  let blockSeventh = useRef(null)


  useEffect(() => {
    timeline.from(".block", {
      scale: 2,
      duration: 1.2,
      opacity: 0,
      y: 290,
      stagger: 0.15,
      ease: Power3.easeOut
    },);
    // BLOCK 7
    timeline.to(blockSeventh, {
      duration: 1.8,
      x: "350",
      y: "350",
      scale: "0.3",
      ease: Power3.easeOut,
    }, "+=.7");
    // BLOCK 6
    timeline.to(blockSixth, {
      duration: 1.8,
      x: "430",
      y: "285",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
    // BLOCK 5
    timeline.to(blockFifth, {
      duration: 1.8,
      x: "490",
      y: "220",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
    // BLOCK 4
    timeline.to(blockFourth, {
      duration: 1.8,
      x: "540",
      y: "150",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
    // BLOCK 3
    timeline.to(blockThird, {
      duration: 1.8,
      x: "610",
      y: "80",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
    // BLOCK 2
    timeline.to(blockTwo, {
      duration: 1.8,
      x: "700",
      y: "10",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
    // BLOCK 1
    timeline.to(blockOne, {
      duration: 1.8,
      x: "790",
      y: "-50",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
  });
  
  
  return (
    <main className="container-title">
      <section className="leftSideTitle">
      </section>

      {/* MIDDLE */}
      <section className="middle">
        <div className="haut">
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
      <section className="rightSideTitle"></section>
    </main>
  );
};

export default Title;
