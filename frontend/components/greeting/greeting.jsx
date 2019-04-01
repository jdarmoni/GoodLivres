import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import {withRouter} from 'react-router-dom';

class Greeting extends React.Component{ 
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this)
    }
    splashPage() {
        //LOGGED OUT
        return (
            <>
                <div className="background-image">

                </div>

                <div className="masthead">
                {/* extra masthead here */}
                    <header className="splash-nav">
                            <img src={window.logoURL} />
                        <LoginFormContainer />
                    </header>
                </div>
            </>
            )}
            
    logOut() {
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
                    <img className ="header-image" src ="https://secure.gravatar.com/avatar/ee9daacbf73553c82285907caadd3d8a?secure=true&size=300"/> 
                    <button className="header-button" onClick={this.logOut}>Log Out</button>
                </hgroup>
            </nav>
    ) };
    
    render(){
        
        return this.props.currentUser ? this.myBooks() : this.splashPage();
    } 
};


export default withRouter(Greeting);
