import React, { useEffect } from 'react';
import '../Who/Presentation.scss'
import flècheDroite from '../../Pictures/flèche-droite.png'

const Presentation = ({timeline}) => {





    useEffect(() => {
        
        
        
        timeline.from(".box-presentation", 1.2, {
            y: 1200,
            ease: "power4.out",
            opacity: 0,
       },)
        .from(".box-presentation", 2, {
            scale: 1.6,
            ease: "power4.out",
        },"-=1");
        timeline.from(".text > img", {
            duration: 1.4,
            y: 200,
            skewY: 30,
            stagger: {
                amount: .4
            },
            ease: "power4.out"
        }, "-=1")
        timeline.from(".text > p",{
            duration: 1.4,
            y: 210,
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
                <div className="box-presentation"></div>
            </section>

            {/* RIGHT */}
            <section className="text-presentation">
                <div className="text-pres-container">
                    <div className="text">
                        <img src={flècheDroite} alt="flèche" />
                        <p>Je m'appelle <strong>Yassine Boulakhrif.</strong></p>
                    </div>
                    <div className="text">
                        <img src={flècheDroite} alt="flèche" />
                        <p>Je suis <strong>développeur Front-End Junior</strong> spécialisé en React.js</p>
                    </div>
                    <div className="text">
                        <img src={flècheDroite} alt="flèche" />
                        <p>Passionné de développement web et ayant un fort attrait pour le design et l'<strong>UX/UI</strong>.</p>
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