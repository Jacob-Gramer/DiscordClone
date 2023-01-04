import React from 'react';
import './Message.css';
import { Avatar } from '@mui/material';

function Message() {
    return(
        <div className="message">
            <Avatar />
            <div className="message_info">
                <h4>Example message
                    <span className="message_timestamp">timestamp</span>
                </h4>
                <p>This is the actual message</p>
            </div>
        </div>
    )
}

export default Message