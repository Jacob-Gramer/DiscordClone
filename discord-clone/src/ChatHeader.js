import React from 'react';
import "./ChatHeader.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationAltRoundedIcon from '@mui/icons-material/EditLocationAltRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

function ChatHeader({ channelName }) {
    return(
        <div className="chatHeader">
            <div className="chatHeader_left">
                <h3>
                    <span className="chatHeader_hash">
                        #
                    </span>
                    {channelName ? channelName : 'Main Lobby'}
                </h3>
            </div>
            <div className="chatHeader_right">
                <NotificationsIcon />
                <EditLocationAltRoundedIcon />
                <PeopleAltRoundedIcon />
                <div className="chatHeader_search">
                    <input placeholder="search"></input>
                    <SearchRoundedIcon />
                </div>
                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader;
