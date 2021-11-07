import React from 'react';
import '../Components/Title.css'

const Title = () => {
    return (
        <main className="main-left">
            <section className="left-side">
            <div className="yassine">
                <p>Yassine</p>
                <div className="line-1"></div>
            </div>
            <div className="web-dev">
                <p>Web-dev</p>
                <div className="line-2"></div>
            </div>
            <div className="front-end">
                <p>Front-end</p>
                <div className="line-3"></div>
            </div>
            </section>

            <div className="line-middle"></div>

            <section className="right-side">
                <div className="react-js">
                    <p>React.js</p>
                </div>
            </section>
        </main>
    )
}

export default Title;