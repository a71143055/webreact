import {useState} from "react"
import button from "../chp04/Button";

function Toggle2() {
    const [isToggleOn, setIsToggleOn] = useState(true);

    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    return (
        <button onClick={handleClick}>
            함수형 컴푸넌트 {isToggleOn? "켜짐" : "꺼짐"}
        </button>
    );
}

export default Toggle2