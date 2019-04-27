import { connect } from 'react-redux';
import BookIndexItem from './book_index_item'
import { requestBook } from '../../actions/book_actions';
import { withRouter } from 'react-router-dom';
const msp = (state, ownProps) => {
    
    let bookReview;
    let avg = 0;
    let count = 0;
    Object.values(state.entities.reviews).forEach(review => {
        if (review.book_id === ownProps.book.id){
            avg += review.rating;
            count += 1;
            if (review.user_id === Object.values(state.entities.users)[0].id) {
                bookReview = review;
            }
        }
    });
    
    return {
        book: ownProps.book,
        bookshelves: Object.values(state.entities.bookshelves),
        review: bookReview,
        avg: avg/count
    };
};

const mdp = (dispatch) => {

    return ({
        requestBook: (id) => dispatch(requestBook(id)),
    });
};

export default withRouter(connect(msp, mdp)(BookIndexItem));