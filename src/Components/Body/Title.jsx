import React,{ useRef, useEffect } from "react";
import "../Body/Title.scss";
import { gsap, Power3 } from "gsap";
import maPhoto from "../Pictures/maphoto.jpg";

const Title = ({timeline}) => {

  let yass = useRef(null)
  let dev = useRef(null)

  useEffect(() => {
    gsap.to(yass, dev, 0.8, {
      delay:0.8,
      ease: Power3.easeout,
      y: -70,
      opacity: 0,
    })
  }, [])

  return (
    <container className="container-title">
        {/* LEFT */}
      <section className="left-side-title">
        <div className="container-span-left">
          <span className="yassine" ref={el => yass = el}>Yassine</span>
          <span className="developpeur" ref={el => dev = el}>Developpeur</span>
        </div>
      </section>
      {/* IMAGE */}
      <div className="image-title">
        <img src={maPhoto} alt="" />
      </div>
      {/* RIGHT */}
      <section className="right-side-title">
        <div className="container-span-right">
          <span className="front">Front</span>
          <span className="end">End</span>
        </div>
      </section>
    </container>
  );
};

export default Title;
