import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './home';
import SplashScreen from './splash';
import Login from './login';


const AppRoutes = () => {
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />


            </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default AppRoutes;
