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
                <footer className="splashFooter">
                    
                        <div className="footer-wrapper">
                            <div className="left-footer-container">
                                <div className="footer-uls-divs">
                                    <ul className="footer-uls">
                                        <h3>COMPANY</h3>
                                        <li>About us</li>
                                        <li>Careers</li>
                                        <li>Terms</li>
                                        <li>Privacy</li>
                                        <li>Help</li>
                                    </ul>
                                </div>
                                <div className="footer-uls-divs">
                                    <ul className="footer-uls">
                                        <h3>Work with us</h3>
                                        <li>Authors</li>
                                        <li>Advertise</li>
                                        <li>Authors & ads blog</li>
                                        <li>Api</li>
                                    </ul>
                                </div>
                                <div className="socials">
                            <a class="responsiveSiteFooter__socialLink" href="https://www.facebook.com/Goodreads/"><img alt="Goodreads on Facebook" src="https://s.gr-assets.com/assets/site_footer/footer_facebook-ea4ab848f8e86c5f5c98311bc9495a1b.svg"/>
                                {/* <img alt="Goodreads on Facebook" src="https://s.gr-assets.com/assets/site_footer/footer_facebook-ea4ab848f8e86c5f5c98311bc9495a1b.svg"/> */}
                            </a>
                            <a class="responsiveSiteFooter__socialLink" href="https://twitter.com/goodreads"><img alt="Goodreads on Twitter" src="https://s.gr-assets.com/assets/site_footer/footer_twitter-126b3ee80481a763f7fccb06ca03053c.svg"/>
                                {/* <img alt="Goodreads on Twitter" src="https://s.gr-assets.com/assets/site_footer/footer_twitter-126b3ee80481a763f7fccb06ca03053c.svg"/>  */}
                            </a>
                            <a class="responsiveSiteFooter__socialLink" href="https://www.instagram.com/goodreads/"><img alt="Goodreads on Instagram" src="https://s.gr-assets.com/assets/site_footer/footer_instagram-d59e3887020f12bcdb12e6c539579d85.svg"/>
                                {/* <img alt="Goodreads on Instagram" src="https://s.gr-assets.com/assets/site_footer/footer_instagram-d59e3887020f12bcdb12e6c539579d85.svg"/> */}
                            </a>
                            <a class="responsiveSiteFooter__socialLink" href="https://www.linkedin.com/company/goodreads-com/"><img alt="Goodreads on LinkedIn" src="https://s.gr-assets.com/assets/site_footer/footer_linkedin-5b820f4703eff965672594ef4d10e33c.svg"/>
                                {/* <img alt="Goodreads on LinkedIn" src="https://s.gr-assets.com/assets/site_footer/footer_linkedin-5b820f4703eff965672594ef4d10e33c.svg"/> */}
                            </a>
                        </div>
                            </div>
                            <div className="right-footer-container">
                                <img alt="Download app for iOS" src="https://s.gr-assets.com/assets/app/badge-ios-desktop-homepage-6ac7ae16eabce57f6c855361656a7540.svg"/>
                                <img alt="Download app for Android" srcset="https://s.gr-assets.com/assets/app/badge-android-desktop-home-2x-e31514e1fb4dddecf9293aa526a64cfe.png 2x" src="https://s.gr-assets.com/assets/app/badge-android-desktop-home-0f517cbae4d56c88a128d27a7bea1118.png"/>
                                <ul className="right-footer-list">
                                    <li className="right-footer-list-item">
                                        ©
                                        2019
                                        Goodreads, Inc.
                                    </li>
                                    <li className="right-footer-list-item">
                                        <a className="footer-mobile-version" href="/toggle_mobile">Mobile version</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </footer>
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
                    <li><Link to={`/bookshelf`}>Home</Link></li>
                    <li className="myBooksLink"><Link to={`/bookshelf`}>My Books</Link></li>
                    <li><Link to={`/browse`}>Browse</Link></li>
                    <li>Community</li>
                </ul>
                <form className="searchbooks">
                    <input type="text" placeholder="Search books" />
                </form> 

                <hgroup className="header-group">
                    {/* <img className ="header-image" src ="https://secure.gravatar.com/avatar/ee9daacbf73553c82285907caadd3d8a?secure=true&size=300"/>  */}
                    <button className="header-button" onClick={this.logOut}>Log Out</button>
                </hgroup>
            </nav>
    ) };
    
    render(){
        
        return this.props.currentUser ? this.myBooks() : this.splashPage();
    } 
};


export default withRouter(Greeting);
