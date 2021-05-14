import React, { useEffect } from 'react';
import { jarallax } from 'jarallax';
import './Jarallax.scss';

function Jarallax({img, speed, children}) {
    useEffect(() => {
        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.2,
            imgPosition: "5% 50%"
        });
        console.log("init")

        return function cleanup() {
            console.log("destroy")
            jarallax(document.querySelectorAll('.jarallax'), 'destroy');
        };
    });

    jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.2
    });
    return (
        <>
            <div></div>
            <div className="jarallax-wrap">
                <div className="jarallax">
                    <img className="jarallax-img"  src={img} alt=""/>
                    <div className="overlay-container"></div>
                    <h1 className="content">
                        {children}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Jarallax;