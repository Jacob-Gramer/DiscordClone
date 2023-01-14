import React from 'react';
import './Message.css';
import { Avatar } from '@mui/material';

function Message({ timestamp, user, message }) {
    let date = new Date(timestamp?.toDate()).toUTCString();
    let convertedDate = date.substr(0,date.length - 7);
    return(
        <div className="message">
            <Avatar src={user.photo}/>
            <div className="message_info">
                <h4>
                    {user.displayName}
                    <span className="message_timestamp">{convertedDate}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message