import React from 'react';
import ReactDOM from 'react-dom';
import {logout, login, signup} from './util/session_api_util'
// import {login} from './actions/session_actions'
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.login = login
    window.logout = logout
    window.signup = signup

    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to GoodLivres!</h1>, root);
});
