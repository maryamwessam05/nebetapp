import React from 'react';
import "./style.css"
import Nav from '../components/nav';
import sidelogo from "../assets/sidelogo.svg";


const Map = () => {
    return (
        <main>
            <div className="mapscreen">
            <img src={sidelogo} alt="" />
                <iframe 
                    src="https://api.maptiler.com/maps/019e18da-1a31-7dfc-9e5f-7952c5eb0e27/?key=E9DccnsUXG3h16DMcwT9" 
                    frameBorder="0"
                    title="map"
                />
            </div>
            <div className="navcont">
                <Nav />
            </div>
        </main>
    );
}
 
export default Map;