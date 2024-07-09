import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServicePage  from './pages/servicePage';
import HomePage from './pages/HomePage';

const RouterPaths = () => {
    return(
        <Router>
            <Routes>
                <Route path="service/:serviceName" element={ <ServicePage/> }></Route>
                <Route path="/" element={ <HomePage/> }></Route>
            </Routes>
        </Router>
    )
}

export default RouterPaths;