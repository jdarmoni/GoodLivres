import React from 'react'
import GreetingContainer from '../components/greeting/greeting_container'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {Route, Switch, Link} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BookshelfContainer from './bookshelf/bookshelf_container';
import BookshelfIndexItem from './bookshelf/bookshelf_index_item';

const App = ()=>{
    return (
    <div className="container-splash">
            <GreetingContainer/> 
        <div className="masthead">
            
            {/* <BooksContainer exact path="books" component={}/> */}
            {/* 15 has no specified route so will always display */}
            {/* specified path will display at that pathx */}
            <ProtectedRoute className="bookShelves" exact path="/books" component={BookshelfContainer} />
            <ProtectedRoute exact path ={`/books/:id`} component={BookshelfIndexItem}/>
            <AuthRoute className="bodymain" exact path="/" component={SignupFormContainer} />
        </div>
    </div>
)}

export default App