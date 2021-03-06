import React from 'react'
import GreetingContainer from '../components/greeting/greeting_container'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {Route, Switch, Link} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BookshelfContainer from './bookshelf/bookshelf_container';
import BookshelfIndexItem from './bookshelf/bookshelf_index_item';
import BookShowContainer from './book/book_show_container';
import BookContainer from './book/book_container';
import BrowseContainer from './browse/browse_container'
import ReviewsIndex from './reviews/reviews_index';
import EditFormContainer from './reviews/edit_form_container'
const App = ()=>{
    return (
    <div className="container-splash">
            <GreetingContainer/> 
        <div className="masthead">
            
            {/* <BooksContainer exact path="books" component={}/> */}
            {/* 15 has no specified route so will always display */}
            {/* specified path will display at that pathx */}
            <Route exact path="/book/:id"  component={BookShowContainer}/>
            {/* <Route exact path="/book/:id"  component={ReviewsIndex} /> */}
            <Route exact path="/books" component={BookContainer}/>
            <ProtectedRoute exact path="/review/edit/:id" component={EditFormContainer} />
            <ProtectedRoute className="bookShelves" exact path="/bookshelf" component={BookshelfContainer} />
            <ProtectedRoute exact path ={`/bookshelf/:id`} component={BookshelfContainer}/>
            <Route exact path="/browse" component={BrowseContainer} />
            <AuthRoute className="bodymain" exact path="/" component={SignupFormContainer} />
        </div>
    </div>
)}

export default App