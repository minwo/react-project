
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from '../components/loader';
import Button , { test }from '../components/Button';

import "swiper/scss";

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

    const ldType = false;
    
    return (
        <div id="container">
            <div className="content">
                main
                <button onClick={onClick}>버튼</button>
                <Loader {...comment} type={ldType} number={number}/>
                
                <div className="button-wrap">
                    <Button type={type} {...comment} /> 
                </div>
                <Swiper 
                    className='test'
                    loop={true}
                    spaceBetween={50} 
                    slidesPerView={3} 
                    onSwiper={(swiper) => {
                        
                    }}
                    onSlideChange={(swiper) => {
                        
                    }} 
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Main;
