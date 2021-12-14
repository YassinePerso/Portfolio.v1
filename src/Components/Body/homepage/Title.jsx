import React, { useEffect, useRef } from "react";
import "../homepage/Title.scss";
import { Power3 } from 'gsap';
import avatar from '../../Pictures/avatar-portfolio-V2.png';


const Title = ({timeline}) => {


     ////  FIRST ANIMATION ////
  let blockOne = useRef(null)
  let blockTwo = useRef(null)
  let blockThird = useRef(null)
  let blockFourth = useRef(null)
  let blockFifth = useRef(null)
  let blockSixth = useRef(null)
  let blockSeventh = useRef(null)

     ////  Letters  FRONT   ////
     let F = useRef(null)
     let R = useRef(null)
     let O = useRef(null)
     let N = useRef(null)
     let T = useRef(null)

     ////  Letters  Developpeur   ////
     let E = useRef(null)
     let N2 = useRef(null)
     let D = useRef(null)


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

    ///////////// AVATAR ///////////
    timeline.from(".image", {
      opacity: 0,
      x: 200,
      // skewX: 20,
    });
    ///-------  Text Apparition -------///
    // timeline.from(".bas-1-left p ", {
    //         y: 100,
    //         x: 250,
    //         opacity: 0,
    //         skewX: 10,
    //         stagger: {
    //           amount: .8
    //       },
    // }, "-=1.2");

    ///  ------------------   ANIMATION letter FRONT  ----------------------   ///
    timeline.from(F, {
      duration: 1.4,
      scale: .2,
      x: 20,
      y: 320,
    }, "-=1");
    timeline.from(R, {
      duration: 1.4,
      scale: .2,
      x: -30,
      y: 320,
    },  "-=1.3");
    timeline.from(O, {
      duration: 1.4,
      scale: .2,
      x: -90,
      y: 320,
    }, "-=1.3");
    timeline.from(N, {
      duration: 1.4,
      scale: .2,
      x: -152,
      y: 320,
    }, "-=1.3");
    timeline.from(T, {
      duration: 1.4,
      scale: .2,
      x: -207,
      y: 320,
    }, "-=1.3");
    /// --- ANIMATION Developpeur --- ///
    timeline.from(".text-middle > span", {
        y: 100,
        opacity: 0,
        skewY: 30,
        stagger: {
          amount: 1.5,
    },
}, "-=1");
    ///  ------------------   ANIMATION letter END  ----------------------   ///

//     timeline.from(".bas-1-right > span", {
//         y: 100,
//         opacity: 0,
//         skewX: 10,
//         stagger: {
//           amount: .8
// },
// }, "-=.8");

timeline.from(E, {
  duration: 1.4,
  scale: .2,
  x: -30,
  y: 320,
},  "-=1.3");
timeline.from(N2, {
  duration: 1.4,
  scale: .2,
  x: -82,
  y: 320,
},  "-=1.3");
timeline.from(D, {
  duration: 1.4,
  scale: .2,
  x: -143,
  y: 320,
},  "-=1.3");
//       timeline.from(".bas-2-right-text", {
//          duration: 1.4,
//          width: 0,
//         // skewY: 40,
//         stagger: {
//             amount: .4
//     },
//   ease: "power4.out"
// }, "-=.8");
    timeline.from(".bas-2-right-text > span", {
      duration: 1.4,
      y: 200,
      skewY: 40,
      stagger: {
          amount: .4
      },
      ease: "power4.out"
}, "-=.7");

  });
  
  
  return (
    <main className="container-title">

      {/* LEFT */}
      <section className="leftSideTitle">
        <div className="haut-left"></div>
        <div className="bas-left">
          <div className="bas-1-left">
            <p ref={el => F = el}>F</p>
            <p ref={el => R = el}>R</p>
            <p ref={el => O = el}>O</p>
            <p ref={el => N = el}>N</p>
            <p ref={el => T = el}>T</p>
          </div>
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
          <div className="text-middle">
            <span >D</span>
            <span >E</span>
            <span >V</span>
            <span >E</span>
            <span >L</span>
            <span >O</span>
            <span >P</span>
            <span >P</span>
            <span >E</span>
            <span >U</span>
            <span >R</span>
          </div>
        </div>
        <div className="bas-middle">
          <div className="image-middle">
            <img src={avatar} alt="" className="image" height="420" width="200" />
          </div>
        </div>

      </section>

        {/* RIGHT */}
      <section className="rightSideTitle">
      <div className="haut-right"></div>
        <div className="bas-right">
          <div className="bas-1-right">
            <span ref={el => E = el}>E</span>
            <span ref={el => N2 = el}>N</span>
            <span ref={el => D = el}>D</span>
          </div>
          <div className="bas-2-right">
            <div className="bas-2-right-text">
              <span>-In love with Web Developpement-</span>
              <span>Fan of UX/UI and Beautiful websites</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Title;
