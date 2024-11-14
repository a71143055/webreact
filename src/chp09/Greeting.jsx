import React from "react";
import UserGreeting from "./UserGuestGreeting";
import GuestGreeting from "./GuestGreeting";

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting/>
    }
    return <GuestGreeting/>
}

export default Greeting;