import React, { useRef } from 'react';

const Cursor = () => {

    let curseurRef = useRef();

    const mousePos = (event) => {
        curseurRef.current.setAttribute('style', `top:${event.pageY - 20}px; left:${event.pageX - 20}px;`)
    }
    return (
        <div onMouseMove={mousePos} className="Cursor">
            <div ref={curseurRef} className="curseur-perso"></div>
        </div>
    );
};

export default Cursor;

