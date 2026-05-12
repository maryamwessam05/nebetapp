import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import sidelogo from "../assets/sidelogo.svg"
import heroimg from "../assets/heroimg.png"
import Button from '../components/button';
import arrow from "../assets/arrw.svg"
import blurar from "../assets/bluar.svg"
import tick from "../assets/ticket.svg"
import cal from "../assets/cal.svg"
import loc from "../assets/loc.svg"
import Nav from '../components/nav';

const Details = () => {
    return ( 
        <>
         <main>
            <div className="homescreen">
                <img src={sidelogo} alt="" />
                 <div className="back">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="19" viewBox="0 0 32 19" fill="none">
                                <path d="M10.5593 18.4174C10.5593 17.4412 9.59179 15.9836 8.61242 14.7602C7.35322 13.1816 5.84853 11.8042 4.1234 10.7531C2.82989 9.9651 1.26183 9.20868 0 9.20868M0 9.20868C1.26183 9.20868 2.83121 8.45225 4.1234 7.66425C5.84853 6.61183 7.35322 5.23447 8.61242 3.65847C9.59179 2.43372 10.5593 0.973484 10.5593 -5.72205e-06M0 9.20868H31.6779" stroke="#F0E1CE" stroke-width="1.90313"/>
                            </svg>
                        </div>
                <div className="hero">
                    <img src={heroimg} alt="" />
                    <div className="herotxt">
                        <div className="date">
                            <h4>May 15 - May 20</h4> 
                        </div>
                        <h1>Nebet Exhibit</h1>
                        <p>Discover the ancient rituals</p>
                    </div>
                </div>

               
                

                <div className="navcont">
                    <Nav />
                </div>
            </div>
            
        </main>
        </>
     );
}
 
export default Details;