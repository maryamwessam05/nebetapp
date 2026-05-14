import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import sidelogo from "../assets/sidelogo.svg"


const ComingSoon = () => {
    return ( 
        <>
        <div className="ticketscreen">
            <img src={sidelogo} alt="" />
            <h1  className='header'>Explore Sections</h1>
        </div>
        </>
     );
}
 
export default ComingSoon;