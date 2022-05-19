
import React, { useState } from 'react';
import Loader from '../components/loader';
import Button , { test }from '../components/Button';

function Main() {
    console.log(test())
    const [number, setNumber] = useState(0);
    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
          name: 'Hello Kitty',
          avatarUrl: 'http://placekitten.com/g/64/64'
        }
      };
    const onClick = () => {
        setNumber(number + 1);
    }

    const type = {
        size:'big',
        color:'#fff'
    }
    
    return (
        <div id="container">
            <div className="content">
                main
                <button onClick={onClick}>버튼</button>
                <Loader {...comment} number={number}/>
                
                <div className="button-wrap">
                    <Button type={type} {...comment} /> 
                </div>
            </div>
        </div>
    );
}

export default Main;
