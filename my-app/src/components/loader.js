
import React, { useState } from 'react';
function formatDate(date) {
    return date.toLocaleDateString();
  }
function loader(props) {
    // const [testState, setTestState] = useState(props)
    console.log(props)
    return (
        <>
            <div>{props.number} {props.author.name}sgsdgsdg + {formatDate(props.date)}</div>
            <div className="spin-loader" aria-hidden="true"></div>
        </>
    );
}

export default loader;
