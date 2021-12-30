import React, { useEffect, useRef } from "react";
import "../homepage/Title.scss";
import { Power3 } from 'gsap';
import gsap from "gsap";
import avatar from "../../Pictures/avatar-portfolio-V2.png"
import firstproject from "../../Pictures/firstproject.jpg"
import secondproject from "../../Pictures/secondproject.jpg"
import thirdproject from "../../Pictures/thirdproject.jpg";


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
      duration: 1.9,
      x: "380",
      y: "350",
      scale: "0.3",
      ease: Power3.easeOut,
    }, "+=.7");
    // BLOCK 6
    timeline.to(blockSixth, {
      duration: 1.9,
      x: "460",
      y: "285",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
    // BLOCK 5
    timeline.to(blockFifth, {
      duration: 1.9,
      x: "520",
      y: "220",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
    // BLOCK 4
    timeline.to(blockFourth, {
      duration: 1.9,
      x: "570",
      y: "150",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
    // BLOCK 3
    timeline.to(blockThird, {
      duration: 1.9,
      x: "640",
      y: "80",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
    // BLOCK 2
    timeline.to(blockTwo, {
      duration: 1.9,
      x: "730",
      y: "10",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
    // BLOCK 1
    timeline.to(blockOne, {
      duration: 1.9,
      x: "820",
      y: "-50",
      scale: "0.3",
      ease: Power3.easeOut
    }, "-=2");
  });
  

 
  
  
  return (
    <main className="container-title">


      {/* LEFT */}
      <section className="leftSideTitle">
        <div className="left-1">
        <p className="pfrench"><span class="text">FRENCH</span></p>
        </div>
        <div className="left-2">
        <p className="p-cool"><span class="text">& COOL,</span></p>
        </div>
        <div className="left-3">
        <p className="p-front"><span class="text">FRONT</span></p>
        </div>
        <div className="left-4">
        <p className="p-dev"><span class="text">DEV-WEB</span></p>
        </div>

        <img src={avatar} alt="jeu" className="avatar" />
        <img src={firstproject} alt="jeu" className="firstproject" />
        <img src={secondproject} alt="jeu" className="secondproject" />
        <img src={thirdproject} alt="jeu" className="thirdproject" />
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

