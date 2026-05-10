import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './home';
import SplashScreen from './splash';


const AppRoutes = () => {
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SplashScreen />} />

            </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default AppRoutes;
