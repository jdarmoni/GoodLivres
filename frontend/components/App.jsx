import React from 'react'
import GreetingContainer from '../components/greeting/greeting_container'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {Route, Switch, Link} from 'react-router-dom'
import { AuthRoute } from '../util/route_util';

const App = ()=>{
    return (
    <div>
        <header>
            <Link to="/" className="header-link">
        <h1>GoodLivres</h1>
            </Link>
        <GreetingContainer />
        </header>

        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

    </div>
)}

export default App