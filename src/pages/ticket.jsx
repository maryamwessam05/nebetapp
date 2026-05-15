import React from 'react';
import "./style.css"
import sidelogo from "../assets/sidelogo.svg"
import Button from '../components/button';
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
        <main aria-label="Your ticket">
            <div className="ticketscreen">

                <img src={sidelogo} alt="Nebula logo" />

                <div className="headercont" aria-labelledby="page-title">
                    <h1 className='header' id="page-title">Explore Sections</h1>
                    <span aria-label="Instructions: Present this ticket at the entrance">
                        Present this at the entrance
                    </span>
                </div>

                <article className="tickcont" aria-label="VIP ticket details">

                    <div className="tickrow" aria-hidden="true">
                        <img src={ticklogo} alt="" />
                        <div className="tickstat">VIP</div>
                    </div>

                    <p className="sr-only">
                        Ticket type: VIP
                    </p>

                    <div className="qr" role="img" aria-label="QR code for ticket ID NEB-2026-VIP-00142">
                        <img src={qr} alt="" aria-hidden="true" />
                        <span aria-label="Ticket ID: NEB-2026-VIP-00142">
                            Ticket ID: NEB-2026-VIP-00142
                        </span>
                    </div>

                    <div className="line" role="separator" aria-hidden="true" />

                    <dl className="tickdeet" aria-label="Ticket information">
                        <Tickdet icon={tick1} textop="Guest Name" info="Alexandra Thompson" />
                        <Tickdet icon={tick2} textop="Date"       info="May 15, 2026" />
                        <Tickdet icon={tick3} textop="Time"       info="3:00 PM - 6:00 PM" />
                        <Tickdet icon={tick4} textop="Venue"      info="Cairo Museum, Gallery 7" />
                    </dl>

                </article>

                <div className="tickbtns" role="group" aria-label="Ticket actions">
                    <Button style="beigebtn" icon={down} text="Download" aria-label="Download ticket" />
                    <Button style="blackbtn" icon={share} text="Share"    aria-label="Share ticket" />
                </div>

                <div className="navcont" aria-label="Main navigation">
                    <Nav />
                </div>

            </div>
        </main>
        </>
     );
}
 
export default Ticket;