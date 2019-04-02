import { connect } from 'react-redux';
import BookShowItem from './book_show_item';
import { requestBook } from '../../actions/book_actions';

const msp = (state, ownProps) => {
  debugger
  let bookId = parseInt(ownProps.match.params.id);
  debugger
  let book = null;
  if (state.entities.books[bookId]) {
     book = state.entities.books[bookId]
  } else {
     book = state.entities.books
  }
  debugger
  // when you run this successfully, will look like: 
    //          state.entities.books
  //            { 1: { … } } 1: { id: 1, created_at: "2019-04-02T00:33:47.645Z", updated_at: "2019-04-02T00:33:47.645Z", title: "the Three Musketeers", description: "the three musketeers", … } __proto__: Object
  //            state.entities.books[1]
  //            { id: 1, created_at: "2019-04-02T00:33:47.645Z", updated_at: "2019-04-02T00:33:47.645Z", title: "the Three Musketeers", description: "the three musketeers", … }

  return {
    book: book
  };
};

const mdp = (dispatch) => {

  return ({
    requestBook: (id) => dispatch(requestBook(id))
  });
};

export default connect(msp, mdp)(BookShowItem);