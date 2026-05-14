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

const Home = () => {
    return ( 
        <>
        <main>
            <div className="homescreen">
                <img src={sidelogo} alt="" />

                <div className="hero">
                    <img src={heroimg} alt="" />
                    <div className="herotxt">
                        <div className="date">
                            <h4>May 15 - May 20</h4> 
                        </div>
                        <h1>Nebet Exhibit</h1>
                        <p>Discover the ancient rituals</p>
                        <div className="bookbtn">
                            <Link to={"/booking"}>
                                <Button style="beigebtn" rec="rec2" text="Book Now" icon={arrow} />
                            </Link>
                            <Link to={"/details"}>
                                <Button style="blackbtn" rec="rec" text="View Details" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="explore">
                    <h1 className='header'>Explore Sections</h1>
                    <div className="sections">
                        
                            <div className="sec">
                                <img className='blurar' src={blurar} alt="" />
                                <h5>Origins</h5>
                            </div>
                        <div className="seccol">
                            <div className="sec2">
                                <img className='blurar' src={blurar} alt="" />
                                <h5>Rituals</h5>
                            </div>
                            <div className="sec3">
                                <img className='blurar' src={blurar} alt="" />
                                <h5>Ingredients</h5>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="booki">
                    <h1 className="header">Your Booking</h1>
                    <div className="tick1">
                        <img src={tick} alt="" />
                        <div className="ticktxt">
                            <img className='sidelogo' src={sidelogo} alt="" />
                            <h1>VIP Experience</h1>
                            <div className="det">
                                <div className="pair">
                                    <img src={cal} alt="" />
                                    <span>May 15, 2026</span>
                                </div>
                                <div className="pair">
                                    <img src={loc} alt="" />
                                    <span>Cairo Museum</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={"/rating"}>
                    <Button style="blackbtn" text="Rate your Experience" />
                    
                    </Link>
                </div>

                <div className="navcont">
                    <Nav />
                </div>
            </div>
            
        </main>
        </>
     );
}
 
export default Home;