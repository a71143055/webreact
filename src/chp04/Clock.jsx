import React from "react";
import "./Clock.css"

function Clock(props) {
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <div className="Clock">현재 시간 : {new Date().toLocaleTimeString()}</div>
        </div>
    );
}

export default Clock;