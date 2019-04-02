import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import bookshelfReducer from './bookshelf_reducer';
import books_reducer from './books_reducer';

export default combineReducers({
    users: usersReducer,
    bookshelves: bookshelfReducer,
    books: books_reducer
});

