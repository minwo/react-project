
import React , { useEffect } from 'react';

function canvas(){
    const el = document.querySelector('.chart');
    const ctx = el.getContext('2d');
    console.log(el.clientWidth , el.clientHeight)
}

function Chart() {
    useEffect(() => {
        canvas();
    },[]);

    return (
        <>
            <canvas className='chart' style={{width:'200px',height:'200px',backgroundColor:'rgba(6,6,6,.3)'}}></canvas>
        </>
    );
}

export default Chart;
