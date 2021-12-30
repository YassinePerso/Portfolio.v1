import React,{ useEffect } from 'react';
import '../Who/Presentation.scss'

const Presentation = ({timeline}) => {

    useEffect(() => {
        const aboutContainers = document.querySelectorAll('.title-about div');

aboutContainers.forEach(item => {

    const letters = item.children[0].textContent.split('');
    item.innerHTML = "";

    letters.forEach((el, index) => {
        item.innerHTML += `<span style="transition-delay: ${0.06 * index}s">${el}</span>`
    })
})
  })



    return (
        <section className="presentation">
            
            <section className="title-about-presentation">
          <h1 class="title-about">
            <div class="span-container-about s1-about">
              <span className="about-me-span">About-me</span>
            </div>
            <div class="span-container-about s2-about">
              <span>About-me</span>
            </div>
          </h1>
        </section>


            <section className='text-about-presentation'>

                <div className="first-text">
                    <p><span className='span-first-text-1'>Bonjour! Je m'appelle Yassine, je</span></p>
                    <p><span className='span-first-text-2'>suis développeur front-end junior </span></p>
                    <p><span className='span-first-text-3'>situé à Paris.</span></p>
                </div>

                <div className="second-text">
                    <p><span className='span-second-text-1'>Passionné par le motion design et l'UX/UI,</span></p>
                    <p><span className='span-second-text-2'>j'aime créer des sites animés et vivants.</span></p>
                    {/* <p><span>developpement web et situé à P</span></p> */}
                </div>

                <div className="third-text">
                    <p><span className='span-third-text-1'>Je suis ouvert à l'apprentissage de</span></p>
                    <p><span className='span-third-text-2'>nouvelles technologies et prêt à </span></p>
                    <p><span className='span-third-text-3'>relever de nouveaux challenges.</span></p>
                </div>
            </section>

        </section>
    );
};

export default Presentation;