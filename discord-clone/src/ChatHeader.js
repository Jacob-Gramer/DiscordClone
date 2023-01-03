import React from 'react';
import "./ChatHeader.css";

function ChatHeader() {
    return(
        <div className="ChatHeader">
            <h3>I am the header</h3>
            <div className="chatHeader_left">
                <h3>
                    <span className="chatHeader_hash">
                        #
                    </span>
                </h3>
            </div>
            <div className="chatHeader_right">

            </div>
        </div>
    )
}

export default ChatHeader;
