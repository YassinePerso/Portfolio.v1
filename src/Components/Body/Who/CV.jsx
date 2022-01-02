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
      <span>Téléchargez mon :</span>
      <button>CV</button>
    </section>
  );
};

export default CV;
