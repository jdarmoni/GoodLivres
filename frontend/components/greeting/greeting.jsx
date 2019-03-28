import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container'

//LOGGED OUT
const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <header>
            <Link to="/" className="header-link">
                <img src={window.logoURL} />
            </Link>
            <LoginFormContainer />
        </header>
    );

    //LOGGED IN!
    const personalGreeting = () =>{ 
        return (
        <header>
            <Link to="/" className="header-link">
                <img src={window.logoURL} />
            </Link>

            <hgroup className="header-group">
                <h2 className="header-name">Hi, {currentUser.username}!</h2>
                <button className="header-button" onClick={logout}>Log Out</button>
            </hgroup>
        </header>
    ) };
    

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
