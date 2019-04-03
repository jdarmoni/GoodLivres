import { connect } from 'react-redux';
import BookIndex from './book_index';
import { requestBooks, requestBook } from '../../actions/book_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  
  return {
    books: state.entities.books
  };
};

const mdp = (dispatch) => {

  return ({
    requestBooks: (bookshelfId) => dispatch(requestBooks(bookshelfId)),
    requestBook: (id) => dispatch(requestBook(id)),

  });
};

export default withRouter(connect(msp, mdp)(BookIndex));