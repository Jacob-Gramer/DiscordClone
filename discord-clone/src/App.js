import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import './App.css';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
