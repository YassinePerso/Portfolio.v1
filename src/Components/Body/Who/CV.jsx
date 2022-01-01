import React, { useEffect } from "react";
import "../Who/CV.scss";

const CV = () => {

    useEffect(() => {
        const cvContainers = document.querySelectorAll('.title-cv div');

cvContainers.forEach(item => {

    const letters = item.children[0].textContent.split('');
    item.innerHTML = "";

    letters.forEach((el, index) => {
        item.innerHTML += `<span style="transition-delay: ${0.04 * index}s">${el}</span>`
    })
})
  })


  return (
    <section className="cv-container">


      <div className="title-cv-container">
        <h2 class="title-cv">
          <div class="span-container-cv s1-cv">
            <span className="about-me-span">Mon CV :</span>
          </div>
          <div class="span-container-cv s2-cv">
            <span>Mon CV :</span>
          </div>
        </h2>
      </div>

      <div className="cv-link-container"></div>
    </section>
  );
};

export default CV;
