
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useScript } from '../components/hooks';
import * as common from '../components/uiCommon';
import { gsap } from "gsap";
import Logo from '../logo.svg'


function Header() {
    const boxRef = useRef();
    let status = useScript("/assets/js/gsap.min.js");
    
    useEffect(() => {
        gsap.to(boxRef.current, { rotation: "+=360" });
        // console.log(boxRef.current)
            // body
        common.test();
        common.test2();
        
        const hdEl = document.querySelectorAll('.depth1 li');
        [].forEach.call(hdEl, (e) => {
            
            e.querySelector('a').addEventListener('click', (event) => {
                console.log(event)
                document.querySelector('.close-menu').click()
            });
        });    
        
        if(status === "ready"){
            // sdk 초기화하기
        }

        // const gnbBtn = document.querySelector('.btn-open');
        // gnbBtn.addEventListener('click', function(e){
        //     e.currentTarget.querySelector('.menu-trigger').classList.add('on');
        //     e.currentTarget.closest('.gnb-module').querySelector('.close-trigger').classList.add('close')
        //     console.log(e.target, e.currentTarget)
        // });
    },[])

    return (
        <header id="header">
            <div className="head-content">
                <div className="logo" ref={boxRef} style={{ display: 'inline-block' }}>
                    <Link to="/">
                        <img src={Logo} style={{ width: '90px' }} alt="logo" />
                    </Link>
                </div>

                <div className="menu-module">
                    <span className="open-menu">
                        <span className="bar top"></span>
                        <span className="bar middle"></span>
                        <span className="bar bottom"></span>
                    </span>

                    <div className='it-module'>
                        <span className="close-menu">
                            <span className="bar left"></span>
                            <span className="bar right"></span>
                        </span>

                        <div className="inner-module">
                            <div className="menu-bg top"></div>
                            <div className="menu-bg middle"></div>
                            <div className="menu-bg bottom"></div>
                        </div>

                        <nav className="gnb">
                            <ul className="depth1">
                                <li>
                                    <Link to="/">Login</Link>
                                </li>
                                <li>
                                    <Link to="/Product">Create</Link>
                                </li>
                                <li>
                                    <Link to="/">Support</Link>
                                </li>
                                <li>
                                    <Link to="/Login">About</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
