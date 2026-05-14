import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import sidelogo from "../assets/sidelogo.svg"
import Button from '../components/button';
import arrow from "../assets/arrw.svg"


const ComingSoon = () => {
    return ( 
        <>
        <main>
            <div className="ticketscreen">
                <div className="logocom">
                    <img src={sidelogo} alt="" />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="152" height="152" viewBox="0 0 152 152" fill="none">
                <path d="M76 76C55.8435 76 36.5126 67.9929 22.2599 53.7401C8.00712 39.4874 0 20.1565 0 0L152 0C152 20.1565 143.993 39.4874 129.74 53.7401C115.487 67.9929 96.1565 76 76 76Z" fill="#F0E1CE"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M76 76C60.8582 75.9966 46.0606 80.5162 33.5047 88.9794C20.9488 97.4425 11.2072 109.463 5.52901 123.5C1.87182 132.556 -0.0054263 142.233 1.17811e-05 152H152C152.008 142.234 150.134 132.557 146.48 123.5C140.802 109.462 131.059 97.4399 118.501 88.9767C105.943 80.5135 91.1434 75.9947 76 76ZM76 104.5C68.6259 104.5 61.353 106.217 54.7574 109.515C48.1617 112.813 42.4245 117.601 38 123.5H114C109.576 117.601 103.838 112.813 97.2427 109.515C90.647 106.217 83.3742 104.5 76 104.5Z" fill="#F0E1CE"/>
                </svg>

                <div className="comings">
                    <h1>Coming Soon</h1>
                    <h5>This experience is coming soon</h5>
                    <h6>We're preparing something extraordinary for you</h6>
                </div>
                <Link to={"/home"}>
                <Button style="beigebtn" text="Back to Home" icon={arrow} />
                </Link>

            </div>

        </main>
        </>
     );
}
 
export default ComingSoon;