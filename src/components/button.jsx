import React from 'react';
import "./button.css"

const Button = (props) => {
    return ( 
        <>
        <button onClick={props.onClick} className={props.style}>
            <div className={props.rec}></div>
            {props.text}
        </button>
        </>
     );
}
 
export default Button;