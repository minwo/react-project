
import React , { useEffect } from 'react';

function canvas(){
    const el = document.querySelector('.chart');
    const ctx = el.getContext('2d');
    
    let windowWidth = window.innerWidth;
    
    const x = 150;
    const y = 150;
    const radius = 100;
    
    let angleStart = 0;
    let angleEnd = Math.PI * 1.7;

    el.setAttribute('width',300);
    el.setAttribute('height',300);

    var gradient = ctx.createLinearGradient(0,500,0, 0);
    gradient.addColorStop(0, '#2a62a9');
    gradient.addColorStop(1, '#3dc8d5');

    // ctx.beginPath();
    // ctx.moveTo(x,y);
    // ctx.arc(x,y,radius,angleStart,angleEnd, false);
    // ctx.fillStyle = 'black';
    // ctx.fill();
    let gra = ctx.createLinearGradient(0,0,150, 150);
    gra.addColorStop(0,'#2a62a9');
    gra.addColorStop(.5,'#3392be');
    gra.addColorStop(1,'#3dc8d5');
    ctx.beginPath();
    ctx.clearRect(0,0,x,y);
    ctx.arc(x, x, radius, 0, 2*Math.PI, false);
    ctx.strokeStyle = gra;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, x, radius, 0, 2*Math.PI, false);
    ctx.lineWidth = 30;
    // ctx.strokeStyle = 'rgba(0,0,0, 0.2)'
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x, y, radius, angleStart, 1.5);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 30;
    ctx.stroke();
    ctx.save();

    // ctx.beginPath();
    // ctx.arc(x, y, radius, 1.5, 2);
    // ctx.strokeStyle = 'red';
    // ctx.lineWidth = 30;
    // ctx.stroke();
 
    // ctx.beginPath();
    // ctx.arc(x, y, radius, 2, 4);
    // ctx.strokeStyle = 'blue';
    // ctx.lineWidth = 30;
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.arc(x, y, radius, 4, 6.3);
    // ctx.strokeStyle = 'blue';
    // ctx.lineWidth = 30;
    // ctx.stroke();


}

function Chart() {
    useEffect(() => {
        canvas();
    },[]);

    return (
        <>
            <canvas className='chart'></canvas>
        </>
    );
}

export default Chart;
