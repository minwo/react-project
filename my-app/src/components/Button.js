
import React , { useEffect } from 'react';

function test(){
    return 100000;
};

function Button(props) {

    console.log(props)
    useEffect(() => {
        document.querySelector('.btn-toggle').addEventListener('click', function(){
            this.classList.toggle('active');
        });
    });

    return (
        <>
            <button className={"btn-toggle " + (props.type.size)}><span className="handle"></span></button>
        </>
    );
}

export { Button as default , test};
