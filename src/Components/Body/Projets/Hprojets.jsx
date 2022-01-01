import React from 'react';
import'../Projets/Hprojets.scss';
import flècheBasDroite from '../../Pictures/flèche-bas-droite.png';


const Hprojets = ({timeline}) => {


    document.addEventListener("mousemove", parallax);
function parallax(e) {
document.querySelectorAll(".span-mes-projets").forEach(function(move) {
  let moving_value = move.getAttribute("data-value");
  let x = (e.clientX * moving_value) / 250;
  let y = (e.clientY * moving_value) / 250;

  move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
});
}
document.addEventListener("mousemove", parallaxed);
function parallaxed(e) {
document.querySelectorAll(".arrow").forEach(function(move) {
  let moving_value = move.getAttribute("data-value");
  let x = (e.clientX * moving_value) / 250;
  let y = (e.clientY * moving_value) / 250;

  move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
});
}

    return (        
        <section className="H1projets">
            
            <p>
                <span data-value="13" className='span-mes-projets'>Mes Projets</span>
            </p>
            <img src={flècheBasDroite} className='arrow' data-value="20" alt="arrow" width={110} />
        </section>
       
    );
};

export default Hprojets;