import { connect } from 'react-redux';
import BookShowItem from './book_show_item';
import { requestBook } from '../../actions/book_actions';

const msp = (state, ownProps) => {
  debugger
  let bookId = parseInt(ownProps.match.params.id);
  debugger
  let book;
  if (state.entities.books[bookId]) {
     book = state.entities.books[bookId]
  } else {
     book = state.entities.books
  } debugger
  return {
    book: book,
    bookshelves: state.entities.bookshelves
  };
};

const mdp = (dispatch) => {

  return ({
    requestBook: (id) => dispatch(requestBook(id))
  });
};

export default connect(msp, mdp)(BookShowItem);