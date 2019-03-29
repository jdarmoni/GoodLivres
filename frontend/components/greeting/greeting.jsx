import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import {withRouter} from 'react-router-dom';

class Greeting extends React.Component{ 
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this)
    }
    sessionLinks() {
        //LOGGED OUT
        return (
            <div className="masthead">
                <header className="splash-nav">
                        <img src={window.logoURL} />
                    <LoginFormContainer />
                </header>
            </div>
            )}

    logOut() {
        debugger
        this.props.logout()
        this.props.history.replace('/')    
    }
    
    myBooks()  { 
        //LOGGED IN!
        
        return (
            <nav className="logged-in-header-link">
                <ul>
                    <li><img className="logo" src={window.logoURL} /></li>
                    <li>Home</li>
                    <li>My Books</li>
                </ul>
                <form className="searchbooks">
                    <input type="text" placeholder="Search books" />
                </form> 

                <hgroup className="header-group">
                    <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2> 
                    <button className="header-button" onClick={this.logOut}>Log Out</button>
                </hgroup>
            </nav>
    ) };
    
    render(){
        
        return this.props.currentUser ? this.myBooks() : this.sessionLinks();
    } 
};


export default withRouter(Greeting);
