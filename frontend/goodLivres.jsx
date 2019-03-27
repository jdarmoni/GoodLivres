import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
// import {logout, login, signup} from './util/session_api_util'
import {signup, login, logout} from './actions/session_actions'
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    // ********TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.login = login
    window.logout = logout
    window.signup = signup
    // ********TESTING END
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
