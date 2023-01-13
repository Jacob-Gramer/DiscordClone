import React from 'react';
import { Button } from '@mui/material';
import './Login.css';

function Login() {
    const signIn = () => {
        // do clever google shit
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Discord_Color_Text_Logo_%282015-2021%29.svg/800px-Discord_Color_Text_Logo_%282015-2021%29.svg.png"
                    alt="Discord Logo"
                />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;