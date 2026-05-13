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
import Tickdet from '../components/tickdet';
import tick1 from "../assets/tickdet01.svg"
import tick2 from "../assets/tickdet02.svg"
import tick3 from "../assets/tickdet03.svg"
import tick4 from "../assets/tickdet04.svg"

const Details = () => {
    return ( 
        <>
         <main>
            <div className="homescreen">
                <img src={sidelogo} alt="" />
                <Link to={"/home"}>
                 <div className="back">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="19" viewBox="0 0 32 19" fill="none">
                                <path d="M10.5593 18.4174C10.5593 17.4412 9.59179 15.9836 8.61242 14.7602C7.35322 13.1816 5.84853 11.8042 4.1234 10.7531C2.82989 9.9651 1.26183 9.20868 0 9.20868M0 9.20868C1.26183 9.20868 2.83121 8.45225 4.1234 7.66425C5.84853 6.61183 7.35322 5.23447 8.61242 3.65847C9.59179 2.43372 10.5593 0.973484 10.5593 -5.72205e-06M0 9.20868H31.6779" stroke="#F0E1CE" stroke-width="1.90313"/>
                            </svg>
                        </div>
                
                </Link>
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
                <div className="tickdeets">
                    <div className="dett">
                        <Tickdet icon ={tick1} textop="Guest Name" info="Alexandra Thompson" />
                    </div>
                    <div className="dett">
                        <Tickdet icon ={tick2} textop="Date" info="May 15, 2026" />
                    </div>
                    <div className="dett">
                        <Tickdet icon ={tick3} textop="Time" info="3:00 PM - 6:00 PM" />
                    </div>
                    <div className="dett">
                        <Tickdet icon ={tick4} textop="Venue" info="Cairo Museum" />

                    </div>
                        
                    </div>

                <div className="about">
                    <h1>About this Experience</h1>
                    <p>Journey through time to discover the ancient Egyptian beauty rituals that have captivated civilizations for millennia. From Cleopatra's legendary cosmetic secrets to the sacred ingredients used in royal ceremonies.</p>

                </div>
                <div className="line"></div>

                <div className="whatin">
                    <h1>What's Included</h1>
                    <div className="spss">
                        <div className="sp">Guided tour of all exhibition sections</div>
                        <div className="sp">Interactive beauty ritual demonstrations</div>
                        <div className="sp">Traditional Egyptian refreshments</div>
                        <div className="sp">Digital exhibition guide</div>

                    </div>
                </div>

                <Link to={"/booking"}>
                    <Button style="beigebtn" rec="rec2" text="Book Now" icon={arrow} />
                </Link>

               
                

                <div className="navcont">
                    <Nav />
                </div>
            </div>
            
        </main>
        </>
     );
}
 
export default Details;