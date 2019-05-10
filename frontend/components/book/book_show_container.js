import { connect } from 'react-redux';
import BookShowItem from './book_show_item';
import { requestBook } from '../../actions/book_actions';
import { requestBookshelves } from '../../actions/bookshelf_actions';
import {createReview, updateReview } from '../../actions/review_actions';
import {createShelving} from '../../actions/shelving_actions';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => {
  
  let bookId = parseInt(ownProps.match.params.id);
  let book;
  let review; 
  let newBooks = false
  let newBookshelves = Object.values(state.entities.bookshelves);
  // to check if new bookshelves are returned from the shelving controller
  
  if (Object.values(state.entities.shelvings)[0] ) {
    // since the controller can return an increasing number of shelving objects, select the latest one
    newBookshelves = Object.values(state.entities.shelvings)[Object.values(state.entities.shelvings).length - 1].bookshelves
    newBooks = true;
  }

  Object.values(state.entities.reviews).forEach((bookReview)=>{
    if (bookReview.user_id === Object.values(state.entities.users)[0].id) {
      review = bookReview;
    }
  })
  
  if (state.entities.books[bookId]) {
     book = state.entities.books[bookId]
  } else {
     book = state.entities.books
  } 
  
  return {
    book: book,
    bookshelves: Object.values(state.entities.bookshelves),
    review: review,
    reviews: state.entities.reviews,
    user: Object.values(state.entities.users)[0].id,
    shelving: Object.values(state.entities.shelvings)[0],
    newBooks: newBooks,
    newBookshelves: newBookshelves
  };
};

const mdp = (dispatch) => {

  return ({
    requestBook: (id) => dispatch(requestBook(id)),
    requestBookshelves: ()=> dispatch(requestBookshelves()),
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review)),
    createShelving: (shelving)=>dispatch(createShelving(shelving))
  })
};

export default withRouter(connect(msp, mdp)(BookShowItem));