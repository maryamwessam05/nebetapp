import React from 'react';
import "./style.css"
import Nav from '../components/nav';
import sidelogo from "../assets/sidelogo.svg";
import Notif from '../components/notif';
import noticon1 from "../assets/notificon01.svg"
import noticon2 from "../assets/notificon02.svg"
import noticon3 from "../assets/notificon03.svg"
import noticon4 from "../assets/notificon04.svg"


const Alert = () => {
    return ( 
        <>
        <main>
            <div className="alertscreen">
                <img src={sidelogo} alt="" />
                <div className="alertheader">
                    <div className="headercont">
                    <h1  className='header'>Notifications <span>3</span></h1>
                    <span>Present this at the entrance</span>
                    </div>

                    <button>Mark all read</button>

                </div>

                <span className='tod'>Today</span>
                <div className="notifications">
                    <Notif style="new" icon={noticon4} title="Booking Confirmed" sub="Your VIP ticket for May 15 has been confirmed" timeago="2 hours ago" circle="activecircle" iconstyle="newicon" /> 
                    <Notif style="new" icon={noticon3} title="Upcoming Event" sub="Your exhibition visit is in 10 days" timeago="1 day ago" circle="activecircle" iconstyle="newicon" /> 
                    <Notif style="read" icon={noticon2} title="New Section Added" sub="Explore the new Royal Cosmetics section" timeago="3 days ago" circle="unactivecircle" iconstyle="readicon" /> 
                    <Notif style="read" icon={noticon1} title="Special Offer" sub="Get 20% off on workshop bookings this week" timeago="5 days ago" circle="unactivecircle" iconstyle="readicon" /> 

                </div>
             <div className="navcont">
                <Nav />    
             </div>      
            </div>
            
        </main>
        
        </>
     );
}
 
export default Alert;