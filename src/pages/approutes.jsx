import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './home';
import SplashScreen from './splash';
import Login from './login';
import Ticket from './ticket';
import Map from './map';
import Alert from './alert';
import Booking from './booking';
import Details from './details';


const AppRoutes = () => {
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/ticket" element={<Ticket />} />
                <Route path="/map" element={<Map />} />
                <Route path="/alerts" element={<Alert />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/details" element={<Details />} />






            </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default AppRoutes;
