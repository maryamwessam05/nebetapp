import React from 'react';
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
import ticklogo from "../assets/ticklogo.svg"
import qr from "../assets/QR Code.svg"
import Tickdet from '../components/tickdet';
import tick1 from "../assets/tickdet01.svg"
import tick2 from "../assets/tickdet02.svg"
import tick3 from "../assets/tickdet03.svg"
import tick4 from "../assets/tickdet04.svg"
import down from "../assets/down.svg"
import share from "../assets/share.svg"


const Ticket = () => {
    return ( 
        <>
        <main>
            <div className="ticketscreen">
                <img src={sidelogo} alt="" />
                <div className="headercont">
                <h1  className='header'>Explore Sections</h1>
                <span>Present this at the entrance</span>
                </div>

                <div className="tickcont">
                    <div className="tickrow">
                        <img src={ticklogo} alt="" />
                        <div className="tickstat">
                            VIP
                        </div>
                    </div>
                    <div className="qr">
                        <img src={qr} alt="" />
                        <span>Ticket ID: NEB-2026-VIP-00142</span>
                    </div>
                    <div className="line"></div>
                    <div className="tickdeet">
                        <Tickdet icon ={tick1} textop="Guest Name" info="Alexandra Thompson" />
                        <Tickdet icon ={tick2} textop="Date" info="May 15, 2026" />
                        <Tickdet icon ={tick3} textop="Time" info="3:00 PM - 6:00 PM" />
                        <Tickdet icon ={tick4} textop="Venue" info="Cairo Museum, Gallery 7" />
                        
                    </div>
                </div>

                <div className="tickbtns">
                    <Button style="beigebtn" icon={down} text="Download" />
                    <Button style="blackbtn" icon={share} text="Share" />

                </div>

                

                <div className="navcont">
                    <Nav />
                </div>
            </div>
            
        </main>
        </>
     );
}
 
export default Ticket;