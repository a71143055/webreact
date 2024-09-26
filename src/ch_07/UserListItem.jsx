import React, { useState, useEffect } from "react";

function UserListItem(props) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handelStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscribeUserStatus(props.user.id, handelStatusChange);
        return () => {
            SeverAPI.unsubscribeUserStatus(props.user.id, handelStatusChange);
        };
    });

    return (
        <li style={{ color: isOnline ? 'green' : 'black' }}>
            {props.user.name}
        </li>
    );
}