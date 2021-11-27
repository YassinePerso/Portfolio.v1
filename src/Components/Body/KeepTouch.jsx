import React from "react";
import "./KeepTouch.scss";
import H1contact from "./H1contact";

const KeepTouch = () => {
  return (
    <>
      <div className="container-keeptouch">
        <H1contact />
        <section className="container-email">
          <div className="email-bg">
            <h2>yassineboulakhrif75@gmail.com</h2>
          </div>
          <div className="bar-mail"></div>
        </section>
        <section className="mymedias">
          <div className="vide"></div>
          <div className="github"></div>
          <div className="linkedin"></div>
          <div className="gmail"></div>
          <div className="vide"></div>
        </section>
      </div>
    </>
  );
};

export default KeepTouch;
