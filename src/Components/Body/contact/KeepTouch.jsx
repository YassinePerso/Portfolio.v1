import React, { useEffect } from "react";
import "../../Body/contact/KeepTouch.scss";

const KeepTouch = ({timeline}) => {

  
  useEffect(() => {
    //  -----  Contactez-moi ! ----- //
    const spanContainers = document.querySelectorAll('.title div');

spanContainers.forEach(item => {

    const letters = item.children[0].textContent.split('');
    item.innerHTML = "";

    letters.forEach((el, index) => {
        item.innerHTML += `<span style="transition-delay: ${0.06 * index}s">${el}</span>`
    })
})
  })
  return (
    <>
      <div class="container-keeptouch">

        <section className="contactez-moi">
          <h1 class="title">
            <div class="span-container s1">
              <span className="stalk">Contact-me :</span>
            </div>
            <div class="span-container s2">
              <span>Contact-me :</span>
            </div>
          </h1>
        </section>
        
        <section className="links-contact">
          <div className="container-grid-links-contact">
          <div className="container-contact-links-github">
              <div class="span-container g1">
                <span><a href="https://github.com/YassinePerso">- GITHUB -</a></span>
              </div>
              <div class="span-container g2">
                <span><a href="https://github.com/YassinePerso">- GITHUB -</a></span>
              </div>
            </div>

            <aside className="bar-contact1"></aside>

            <div className="container-contact-links-linkedin">
              <div class="span-container l1">
                <span><a href="https://www.linkedin.com/in/yassine-boulakhrif-2a8837221/">- LINKEDIN -</a></span>
              </div>
              <div class="span-container l2">
                <span><a href="https://www.linkedin.com/in/yassine-boulakhrif-2a8837221/">- LINKEDIN -</a></span>
              </div>
            </div>

            <aside className="bar-contact2"></aside>

            <div className="container-contact-links-gmail">
              <div class="span-container gm1">
                <span><a href="https://mail.google.com/">- GMAIL -</a></span>
              </div>
              <div class="span-container gm2">
                <span><a href="https://mail.google.com/">- GMAIL -</a></span>
              </div>
            </div>
            </div>
        </section>

      </div>
    </>
  );
};

export default KeepTouch;
