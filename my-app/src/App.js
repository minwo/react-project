import React, { useEffect, useState } from 'react';
// import { ClassNames } from '@emotion/react';
// import { Routers } from 'react-router-dom';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';
// import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';
import './assets/css/App.scss';
import Header from './components/Header';
import Routers from './components/Routers';

function App() {
   
    return (
        <div className='App'>
            <Header />
            <Routers/>
        </div>
    );
}

export default App;
