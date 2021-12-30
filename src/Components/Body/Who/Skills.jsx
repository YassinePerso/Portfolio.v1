import React, { useEffect } from 'react';
import '../Who/Skills.scss'
import anime from 'animejs';


const Skills = ({timeline}) => {

  useEffect(() => {
    const title = document.querySelector("h1", "h2")
const letters = [...document.querySelectorAll('h1 span', 'h2 span')]


title.addEventListener("mouseenter", handleLetters);
title.addEventListener("mouseleave", handleLetters);

let isAnimatingIn = false;
let calledOut = false;
let animOpened = false;

function handleLetters(){
  
    }
  })

}

function animIn(){
  anime({
    targets: "h1 span",
    translateX: function(){
      return anime.random(-200,200)
    },
    translateY: function(){
      return anime.random(-500,300)
    },
    translateZ: function(){
      return anime.random(-300,200)
    },
    rotate: function(){
      return anime.random(-200,200)
    },
    easing: "easeOutCirc",
    duration: 750
  })
}

function animOut(){
  anime({
    targets: "h1 span",
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    rotate: 0,
    easing: "easeInQuad",
    duration: 750
  })
}
  })


    return (
      <section className='skills-container'>
        <h1>
            <span>S</span>
            <span>T</span>
            <span>Y</span>
            <span>L</span>
            <span>I</span>
            <span>S</span>
            <span>H</span>
        </h1>
    </section>
    );
};

export default Skills;