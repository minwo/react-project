import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';

function App() {
    return (
        <div className="App">
            <span className="check-box">
                <label id="check01" className='' htmlFor="check01">
                    <input type="checkbox" id="check01" className='check01' />
                </label>
            </span>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App;
