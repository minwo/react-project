
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import Header from '../components/Header';
import Main from '../components/Main';
import Product from '../components/Product';
import Login from '../components/Login';

function Routers() {
    
    return (
        
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Login" element={<Login />} />
        </Routes>

    );
}

export default Routers;
