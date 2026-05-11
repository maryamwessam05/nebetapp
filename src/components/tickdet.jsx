import React from 'react';
import "./tickdet.css"

const Tickdet = (props) => {
    return ( 
        <>
        <div className="tickdet">
            <img src={props.icon} alt="" />
            <div className="detxt">
                <span>{props.textop}</span>
                <h4>{props.info}</h4>
            </div>
        </div>
        </>
     );
}
 
export default Tickdet;