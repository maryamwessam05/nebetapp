import React from 'react';
import "./notif.css"

const Notif = (props) => {
    return ( 
        <>
        <div className={props.style}>
            <div className="not">
                <div className={props.iconstyle}><img src={props.icon} alt="" /></div>
                <div className="notiftxt">
                    <h1>{props.title}</h1>
                    <h5>{props.sub}</h5>
                    <span>{props.timeago}</span>
                </div>

            </div>
            <div className={props.circle}></div>
        </div>
        
        </>
     );
}
 
export default Notif;