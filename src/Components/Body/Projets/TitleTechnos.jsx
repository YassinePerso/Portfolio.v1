import React from 'react';
import "../Projets/TitleTechnos.scss"


const TitleTechnos = () => {
    
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
    document.querySelectorAll("#span-tt-z").forEach(function(move) {
      let moving_value = move.getAttribute("data-value");
      let x = (e.clientX * moving_value) / 250;
      let y = (e.clientY * moving_value) / 250;
    
      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
    }


    return (
        <section className="container-title-technos">
             <p>
                <span id='span-tt-z' data-value="20">Technos utilisées : </span>
            </p>
        </section>
    );
};

export default TitleTechnos;