import react, {useState} from "react";
import React from "react";

function ClickButton(props) {

    const handleClick = () => {
        alert("누구이가?")
    };

    return (
        <button onClick={handleClick}>
            버튼을 누르시오.
        </button>
    );
}

export default ClickButton