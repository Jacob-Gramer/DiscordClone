import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarChannel from "./SidebarChannel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";
import { Avatar } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import db, { auth } from "./firebase";

function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection("channels").onSnapshot((snapshot) => {
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    channel: doc.data(),
                }))
            );
        });
    }, []);

    const addChannel = () => {
        const channelName = prompt('Enter a new channel name');
        if (channelName) {
            db.collection("channels").add({
                channelName
            })
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <h3>Clever Programmer</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar_channels">
                <div className="sidebar_channelsHeader">
                    <div className="sidebar_header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar_addChannel" onClick={addChannel}/>
                </div>
                <div className="channelsList">
                    {channels.map(({ id, channel }) => (
                        <SidebarChannel key={id} id={id} channelName={channel.channelName}/>
                    ))}
                </div>
            </div>
            <div className="sidebar_voice">
                <SignalCellularAltIcon
                    className="sidebar_voiceIcon"
                    fontSize="large"
                />
                <div className="sidebar_voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar_voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>
            <div className="sidebar_profile">
                <Avatar src={user.photo} onClick={() => auth.signOut()} />
                <div className="sidebar_profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substr(0, 5)}</p>
                </div>
                <div className="sidebar_profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
