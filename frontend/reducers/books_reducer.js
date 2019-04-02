import { RECEIVE_BOOK, RECEIVE_ALL_BOOKS, REMOVE_BOOK} from '../actions/book_actions';
import merge from 'lodash/merge'

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOOKS:
      debugger
    // IS THIS AN ARRAY OR OBJECT?
      console.log(action)
      // the payload came as an array and here in the reducer i'm converting it into an obj so that later I can key into the entities.bookshelves IDs (in index) and return the object.title
      let booksObj = action.books.reduce((obj, book) => {
        obj[book.id] = book
        return obj;
      }, {});
      return booksObj;
    case RECEIVE_BOOK:

      return merge({}, state, { [action.payload.id]: action.payload });
    case REMOVE_BOOK:

      let newState = merge({}, state);
      delete newState[action.bookId];

      return newState
    default:
      return state;
  }
}