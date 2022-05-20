
import React, { useState } from 'react';
function formatDate(date) {
    return date.toLocaleDateString();
  }
function loader(props) {
    // const [testState, setTestState] = useState(props)
    console.log(props,'loader')
    if(props.type){
        return(
            <>
                <div className="dimm" style={{positoin:'absolute',top:'0',left:'left',right:'0',bottom:'0',backgroundColor:'rgba(0,0,0,.7)'}}>
                    <div className="spin-loader" aria-hidden="true"></div>
                </div>
            </>
        ) 
    } else {
        return <div className="spin-loader" aria-hidden="true"></div>
    }
    // return (
    //     <>
    //         <div>{props.number} {props.author.name}sgsdgsdg + {formatDate(props.date)}</div>
    //         <div className="spin-loader" aria-hidden="true"></div>
    //     </>
    // );
}

export default loader;
