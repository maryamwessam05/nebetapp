import React, { useState } from 'react';
import "./style.css"
import SplashIntro from './splashscreen';
import border from "../assets/border.svg"

const SplashScreen = () => {
    const [introDone, setIntroDone] = useState(false);

    return (
        <main>
            {!introDone && (
                <SplashIntro onComplete={() => setIntroDone(true)} />
            )}
            <div className="splashimg">
                <img src={border} alt="" />
            </div>
        </main>
    );
}

export default SplashScreen;