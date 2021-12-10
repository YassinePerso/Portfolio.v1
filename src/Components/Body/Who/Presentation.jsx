import React, { useEffect } from 'react';
import '../Who/Presentation.scss'
import portrait from '../../Pictures/maphoto.jpg';
import flècheDroite from '../../Pictures/flèche-droite.png'

const Presentation = ({timeline}) => {





    useEffect(() => {
        
        timeline.from(".text > img", {
            duration: 1.4,
            y: 200,
            skewY: 30,
            stagger: {
                amount: .4
            },
            ease: "power4.out"
        })
        timeline.from(".text > p",{
            duration: 1.4,
            y: 200,
            skewY: 30,
            stagger: {
                amount: .4
            },
            ease: "power4.out"
        }, "-=1");
    })




    return (
        <section className="presentation">
            {/* LEFT */}
            <section className="image-presentation">
                <img src={portrait} alt="profil" width={310} height={410} />
            </section>

            {/* RIGHT */}
            <section className="text-presentation">
                <div className="text-pres-container">
                    <div className="text">
                        <img src={flècheDroite} alt="flèche" />
                        <p>Je m'appelle Yassine Boulakhrif.</p>
                    </div>
                    <div className="text">
                        <img src={flècheDroite} alt="flèche" />
                        <p>Je suis développeur Front-End Junior spécialisé en React.js</p>
                    </div>
                    <div className="text">
                        <img src={flècheDroite} alt="flèche" />
                        <p>Passionné de développement web et ayant un fort attrait pour le design et l'UX/UI.</p>
                    </div>
                    <div className="text">
                        <img src={flècheDroite} alt="flèche" />
                        <p>J'ai décidé de m'y consacrer pleinement grâce à un cursus intensif d'un an.</p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Presentation;