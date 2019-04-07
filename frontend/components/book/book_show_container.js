import { connect } from 'react-redux';
import BookShowItem from './book_show_item';
import { requestBook } from '../../actions/book_actions';
import { requestBookshelves } from '../../actions/bookshelf_actions'
import {withRouter} from 'react-router-dom';
const msp = (state, ownProps) => {
  
  let bookId = parseInt(ownProps.match.params.id);
  
  let book;
  if (state.entities.books[bookId]) {
     book = state.entities.books[bookId]
  } else {
     book = state.entities.books
  } 
  return {
    book: book,
    bookshelves: Object.values(state.entities.bookshelves)
  };
};

const mdp = (dispatch) => {

  return ({
    requestBook: (id) => dispatch(requestBook(id)),
    requestBookshelves: ()=> dispatch(requestBookshelves())
  });
};

export default withRouter(connect(msp, mdp)(BookShowItem));