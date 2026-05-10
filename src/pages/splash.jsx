import React, { useState, useEffect, useRef } from 'react';
import {Link} from "react-router-dom";
import "./style.css";
import SplashIntro from './splashscreen';
import spl1 from "../assets/splash1.png";
import spl2 from "../assets/splash2.png";
import spl3 from "../assets/splash3.png";

const slides = [
  {
    img: spl1,
    borderClass: "border",
    splClass: "spl",
    h1: "Discover Ancient Beauty",
    p: "Journey through the timeless rituals and secrets of Egyptian beauty",
  },
  {
    img: spl2,
    borderClass: "border2",
    splClass: "spl",
    h1: "Experience Rituals",
    p: "Immerse yourself in authentic beauty practices from ancient civilizations",
  },
  {
    img: spl3,
    borderClass: "border3",
    splClass: "spl2",
    h1: "Unlock the Exhibition",
    p: "Book your journey and explore the mysteries of beauty through time",
  },
];

const BorderSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="370" height="535"
    viewBox="0 0 370 535" fill="none">
    <path d="M369.5 0.5V534.3L0.5 407.644V0.5H369.5Z" stroke="#F0E1CE"/>
  </svg>
);

const SplashScreen = () => {
  const [introDone, setIntroDone] = useState(false);
  const [current, setCurrent] = useState(0);
const [animState, setAnimState] = useState("idle"); 
    const [displayed, setDisplayed] = useState(0);
    const isAnimating = useRef(false);

 const isFirst = displayed === 0;
  const isLast = displayed === slides.length - 1;
  const slide = slides[displayed];

  const navigate = (direction) => {
    if (isAnimating.current) return;
    const next = direction === "forward" ? current + 1 : current - 1;
    if (next < 0 || next >= slides.length) return;

    isAnimating.current = true;
    const exitClass = direction === "forward" ? "exit-left" : "exit-right";
    const enterClass = direction === "forward" ? "enter-right" : "enter-left";

    setAnimState(exitClass);

    setTimeout(() => {
      setDisplayed(next);
      setCurrent(next);
      setAnimState(enterClass);

      setTimeout(() => {
        setAnimState("idle");
        isAnimating.current = false;
      }, 400);
    }, 350);
  };
  return (
    <main>
      {!introDone && (
        <SplashIntro onComplete={() => setIntroDone(true)} />
      )}
      <div className="splash">

        <div className={`splashimg slide-anim slide-anim--${animState}`}>
          <div className={slide.borderClass}>
            <BorderSVG />
          </div>
          <img className={slide.splClass} src={slide.img} alt="" />
        </div>

        <div className={`spltxt slide-anim slide-anim--${animState}`}>
          <h1>{slide.h1}</h1>
          <p>{slide.p}</p>
        </div>

        <div className="splactions">
          <div className="pagenation">
            {slides.map((_, i) => (
              <div key={i} className={i === current ? "active" : "unactive"} />
            ))}
          </div>

          <div className="splarrow">
            <button
              className="back"
              onClick={() => navigate("back")}
              style={{
                opacity: isFirst ? 0.3 : 1,
                cursor: isFirst ? "default" : "pointer",
                transition: "opacity 0.3s ease",
              }}
              aria-disabled={isFirst}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20"
                viewBox="0 0 11 20" fill="none">
                <path d="M10.027 19.9185C10.1962 19.9185 10.3692 19.8516
                  10.499 19.7218C10.7586 19.4622 10.7586 19.0375 10.499
                  18.7779L1.61448 9.89336L10.3692 1.1386C10.6288 0.879028
                  10.6288 0.454269 10.3692 0.194695C10.1097 -0.0648804
                  9.6849 -0.0648804 9.42532 0.194695L0.194681 9.4214
                  C-0.0648937 9.68098 -0.0648937 10.1057 0.194681
                  10.3653L9.55118 19.7218C9.6849 19.8555 9.854 19.9185
                  10.027 19.9185Z" fill="#F0E1CE"/>
              </svg>
            </button>

            {isLast ? (
            <Link to={"/home"}>
              <button className="get-started" onClick={() => { /* navigate */ }}>
                Get started
              </button>
            </Link>
            ) : (
              <button className="forward" onClick={() => navigate("forward")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20"
                  viewBox="0 0 11 20" fill="none">
                  <path d="M0.666649 19.9185C0.497532 19.9185 0.324462
                    19.8516 0.194674 19.7218C-0.0649004 19.4622 -0.0649004
                    19.0375 0.194674 18.7779L9.07922 9.89336L0.324462
                    1.1386C0.064887 0.879028 0.064887 0.454269 0.324462
                    0.194695C0.584037 -0.0648804 1.0088 -0.0648804 1.26837
                    0.194695L10.499 9.4214C10.7586 9.68098 10.7586 10.1057
                    10.499 10.3653L1.14252 19.7218C1.0088 19.8555 0.839699
                    19.9185 0.666649 19.9185Z" fill="#0B0B0B"/>
                </svg>
              </button>
            )}
          </div>
        </div>

      </div>
    </main>
  );
};

export default SplashScreen;