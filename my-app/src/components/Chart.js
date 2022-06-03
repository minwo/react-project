
import React , { useEffect } from 'react';

function canvas(){
    
    const el = document.querySelector('.chart');
    const valEl = document.querySelector('.chart-value');
    let windowWidth = window.innerWidth * .7; 
    el.setAttribute('width',windowWidth);
    el.setAttribute('height',windowWidth);


    const ctx = el.getContext('2d');
    
    
    const x = windowWidth / 2;
    const y = windowWidth / 2;
    const radius = 100;
    let degree = 360;
    
    let angleStart = 0;
    // let angleEnd = Math.PI * 1.7;

    let chartValue = [30, 20, 40, 50];
    let chartColor = ['red','blue','black','green'];
    const reducer = (accumulator, curr) => accumulator + curr;
    const total = chartValue.reduce(reducer);
    
    var gradient = ctx.createLinearGradient(0,500,0, 0);
    gradient.addColorStop(0, '#2a62a9');
    gradient.addColorStop(1, '#3dc8d5');
    
    const conv_array = chartValue.slice().map((data) => {
        let rate = data / total;
        let myDegree = degree * rate;
        return myDegree;
    });

    let ll = 0;
    degree = 0;
    let startDegree = 0;
    let endDegree = 0;
    let tt = 0;
    let inff = 0.02;
    // draw();

    // function draw(){
    //     startDegree = (Math.PI/180)*0;
    //     endDegree = (Math.PI/180)* chartValue[3];
    //     console.log(endDegree)
    //     tt = tt + inff;
    //     if(tt <= endDegree){
    //         ctx.clearRect(0, 0, windowWidth, windowWidth)
    //         ctx.beginPath()
    //         console.log(tt);
    //         ctx.arc(x, y, radius, startDegree, tt, false);
    //         ctx.lineWidth = 10;
    //         ctx.stroke();
    //         ll = window.requestAnimationFrame(draw);
    //     } else {
    //         console.log('222222222');
    //         cancelAnimationFrame(ll);
    //     }
    // }
    const draw = (startDegree, endDegree, i) => {
        ctx.arc(x, y, radius, startDegree, endDegree, false);
    }
    
    for( let i = 0; i < conv_array.length; i++ ){
        let item = conv_array[i];
        let valTxt = chartValue[i] / total * 100;

        ctx.save();
        ctx.beginPath();

        startDegree = i == 0 ? (Math.PI/180) * 0 : (Math.PI/180) * degree;
        endDegree = i == 0 ? (Math.PI/180) * item : (Math.PI/180) * (degree + item);
        degree = i == 0 ? conv_array[0] : degree + item;;
        
        draw(startDegree, endDegree, i);

        ctx.strokeStyle = chartColor[i];
        ctx.lineWidth = 10;
        ctx.stroke();

        valEl.innerHTML += "<div>" + valTxt.toFixed(2) + "%</div>";
    }

}

function Chart() {
    useEffect(() => {
        canvas();
    },[]);

    return (
        <>
            <canvas className='chart'></canvas>
            <div className="chart-value"></div>
        </>
    );
}

export default Chart;
