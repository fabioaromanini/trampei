import React from 'react';

import fbIcon from './facebook-icon-preview.png';
import googleIcon from './googleicon.png'
import "./LogIn.css";

const LogIn = () => (
    <div className="Login">
        <div className="Login_box">
            <h1>Log In</h1>
            <p>textinho sobre nossa filosofia de login</p>
            <div className="Login_Facebook">
                <img src={fbIcon} alt="Entre pelo Facebook"/>
                <span>Entre pelo Facebook</span>
            </div>
            <a href="/auth/google">
                <div className="Login_Google">
                    <img src={googleIcon} alt="Entre pelo Google"/>
                    <span>Entre pelo Google</span>
                </div>
            </a>
        </div>
    </div>
);

export default LogIn;
