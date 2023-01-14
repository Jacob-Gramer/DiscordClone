import React, { useState, useEffect, useRef } from 'react';
import './Chat.css'
import ChatHeader from './ChatHeader'
import Message from './Message'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function Chat(){
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const messagesEndRef = useRef(null);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection('channels')
                .doc(channelId)
                .collection('messages')
                .orderBy('timestamp')
                .onSnapshot(snapshot =>
                    setMessages(snapshot.docs.map(doc => doc.data())))
        };
        scrollToBottom();
    }, [channelId, messages])

    const sendMessage = e => {
        e.preventDefault();
        db.collection('channels').doc(channelId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user,
        });
        setInput('');
    }

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName}/>
            <div className="chat_messages">
                {messages.map(message => (
                    <Message
                        timestamp={message.timestamp}
                        user={message.user}
                        message={message.message}
                    />
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="chat_input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input
                        value={input}
                        disabled={!channelId}
                        onChange={e => setInput(e.target.value)}
                        placeholder={`Message #${channelName}`} />
                    <button className="chat_inputButton" type="submit" onClick={sendMessage}>Send Message</button>
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