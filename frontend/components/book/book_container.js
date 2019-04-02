import { connect } from 'react-redux';
import BookIndex from './book_index';
import { requestBooks, requestBook } from '../../actions/book_actions';

const msp = (state) => {
  
  return {
    books: state.entities.books
  };
};

const mdp = (dispatch) => {

  return ({
    requestBooks: () => dispatch(requestBooks()),
    requestBook: (id) => dispatch(requestBook(id)),

  });
};

export default connect(msp, mdp)(BookIndex);