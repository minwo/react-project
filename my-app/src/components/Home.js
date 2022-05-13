
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/Topic/velopert">velopert의 프로필</Link>
                </li>
                <li>
                    <Link to="/Topic/gildong">gildong의 프로필</Link>
                </li>
                <li>
                    <Link to="/Topic/void">존재하지 않는 프로필</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
