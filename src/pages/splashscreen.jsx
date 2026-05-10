import React, { useState, useEffect } from 'react';
import "./style.css"
import AnimatedSVG from '../components/originshero';
import logo from "../assets/logo.svg"

const SplashIntro = ({ onComplete }) => {
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLeaving(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const handleAnimationEnd = () => {
        if (leaving && onComplete) onComplete();
    };

    return (
        <main
            className={`splash-intro ${leaving ? 'splash-intro--leaving' : ''}`}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className="anim">
                <AnimatedSVG duration={7} />
            </div>
            <div className="anim2">
                <AnimatedSVG duration={7} />
            </div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </main>
    );
}

export default SplashIntro;