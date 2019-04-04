import { connect } from 'react-redux';
import BookIndex from './book_index';
import { requestBooks, requestBook } from '../../actions/book_actions';
import { withRouter } from 'react-router-dom';
import { requestShelvings} from '../../actions/shelving_actions';
const msp = (state) => {
  
  return {
    books: state.entities.books,
    shelvings: state.entities.shelvings
  };
};

const mdp = (dispatch) => {

  return ({
    requestBooks: (bookshelfId) => dispatch(requestBooks(bookshelfId)),
    requestBook: (id) => dispatch(requestBook(id)),
    requestShelvings: (bookshelfId) => dispatch(requestShelvings(bookshelfId))

  });
};

export default withRouter(connect(msp, mdp)(BookIndex));