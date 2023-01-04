import React from 'react';
import './Chat.css'
import ChatHeader from './ChatHeader'
import Message from './Message'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Chat(){
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chat_messages">
                <Message />
                <Message />
                <Message />
            </div>
            <div className="chat_input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input placeholder="Message #TESTCHANNEL"></input>
                    <button className="chat_inputButton" type="submit">Send Message</button>
                </form>
                <div className="chat_inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>);
}

export default Chat;