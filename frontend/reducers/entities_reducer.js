import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import bookshelfReducer from './bookshelf_reducer';
import books_reducer from './books_reducer';
import shelving_reducer from './shelving_reducer';
import reviews_reducer from './reviews_reducer';

export default combineReducers({
    users: usersReducer,
    bookshelves: bookshelfReducer,
    books: books_reducer,
    shelvings: shelving_reducer,
    reviews: reviews_reducer
});

