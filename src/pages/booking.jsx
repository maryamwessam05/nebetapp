import React , {useState} from 'react';
import "./style.css"
import sidelogo from "../assets/sidelogo.svg"
import Nav from '../components/nav';
import Tickdet from '../components/tickdet';
import tick2 from "../assets/tickdet02.svg"
import tick3 from "../assets/tickdet03.svg"
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";
import Button from '../components/button';
import arrow from "../assets/arrw.svg"
import { Link } from 'react-router-dom';



const Booking = () => {
    const [num, setNum] = useState(0);

      const increment = () => setNum(prev => prev + 1);
    const decrement = () => setNum(prev => Math.max(0, prev - 1));
    return ( 
        <>
        <main>
            <div className="homescreen">
                <img src={sidelogo} alt="" />
                    <div className="headercont">
                        <Link to={"/home"}>
                        <div className="back">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="19" viewBox="0 0 32 19" fill="none">
                                <path d="M10.5593 18.4174C10.5593 17.4412 9.59179 15.9836 8.61242 14.7602C7.35322 13.1816 5.84853 11.8042 4.1234 10.7531C2.82989 9.9651 1.26183 9.20868 0 9.20868M0 9.20868C1.26183 9.20868 2.83121 8.45225 4.1234 7.66425C5.84853 6.61183 7.35322 5.23447 8.61242 3.65847C9.59179 2.43372 10.5593 0.973484 10.5593 -5.72205e-06M0 9.20868H31.6779" stroke="#F0E1CE" stroke-width="1.90313"/>
                            </svg>
                        </div>
                        
                        </Link>
                        <h1  className='header'>Book Tickets</h1>
                        <span>Follow Directions</span>
                    </div>

                        <form action="">
                            <div className="datein">
                                <Tickdet icon ={tick2} info="Select Date" />
                                <input type="date" name="" id="" />
                            </div>
                            <div className="line"></div>
                            <div className="datein">
                                 <Tickdet icon ={tick3} info="Select Time" />
                                 <div className="boxes">
                                    <div className="time">
                                        9:00 AM
                                    </div>
                                    <div className="time">
                                        13:00 AM
                                    </div><div className="time">
                                        16:00 AM
                                    </div>
                                 </div>
                            </div>
                            <div className="datein">
                                <h6>Ticket Type</h6>
                                <div className="boxestt">
                                    <div className="type">
                                        <h4>Regular</h4> <span>250 EGP</span>
                                    </div>
                                    <div className="type">
                                        <h4>VIP Experience</h4> <span>250 EGP</span>
                                    </div>
                                    <div className="type">
                                        <h4>Elite</h4> <span>250 EGP</span>
                                    </div>
                                </div>

                            </div>
                            <div className="datein">
                                <h6>Quantity</h6>
                                <div className="tick">
                                    <button className='tickbtn' type="button" onClick={decrement}><img src={minus} alt="" /></button>
                                        <h1>{num}</h1>
                                    <button className='tickbtn' type="button" onClick={increment}><img src={plus} alt="" /></button>
                                </div>
                            </div>
                            <div className="subtotal">
                                <div className="rows">
                                    <h6>Subtotal</h6>
                                    <span>500 EGP</span>
                                </div>
                                <div className="rows">
                                    <h6>Subtotal</h6>
                                    <span>50 EGP</span>
                                </div>

                                <div className="rotot">
                                    <h4>Total</h4>
                                    <h1>550 EGP</h1>
                                </div>
                            </div>

                            <Button style="beigebtn" rec="rec3" text="Confirm Booking" icon={arrow} />
                        </form>


                
             <div className="navcont">
                <Nav />    
             </div>      
            </div>
            
        </main>
        
        </>
     );
}
 
export default Booking;