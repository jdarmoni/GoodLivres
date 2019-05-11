import { RECEIVE_BOOK, RECEIVE_ALL_BOOKS, REMOVE_BOOK} from '../actions/book_actions';
import merge from 'lodash/merge'
import { REMOVE_SHELVING, RECEIVE_SHELVING } from '../actions/shelving_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_BOOKS:
      
      
      return action.books
    // IS THIS AN ARRAY OR OBJECT? 
      // the payload came as an array and here in the reducer i'm converting it into an obj so that later I can key into the entities.books IDs (in index) and return the object.title
      // let booksObj = action.books.reduce((obj, book) => {
      //   obj[book.id] = book
      //   return obj;
      // }, {});
      // return booksObj;

    case RECEIVE_BOOK:
      return merge({}, state, { [action.payload.id]: action.payload });

    case REMOVE_BOOK:

      newState = merge({}, state);
      delete newState[action.bookId];

      return newState;
    case REMOVE_SHELVING:
      
      newState = merge({}, state);
      delete newState[action.bookId];
      return newState;

    case RECEIVE_SHELVING:      
      return merge({}, state);

    default:
      return state;
  }
};