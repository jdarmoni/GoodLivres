import MyReviewItem from './my_review_item'
import { connect } from 'react-redux';
import { requestReview, deleteReview } from '../../actions/review_actions'


const msp = (state, ownProps) => {
    let newBooks = false
    let newBookshelves = Object.values(state.entities.bookshelves);
    // to check if new bookshelves are returned from the shelving controller

    if (Object.values(state.entities.shelvings)[0]) {
        // since the controller can return an increasing number of shelving objects, select the latest one
        newBookshelves = Object.values(state.entities.shelvings)[Object.values(state.entities.shelvings).length - 1].bookshelves
        newBooks = true;
    }

    return {
        reviews: state.entities.reviews,
        review: ownProps.review,
        user: Object.values(state.entities.users)[0],
        users: state.entities.users,
        book: state.entities.books[ownProps.book],
        bookshelves: state.entities.bookshelves,
        newBooks: newBooks,
        newBookshelves: newBookshelves

    }
}

const mdp = (dispatch) => {
    
    return {
        requestReview: (id) => dispatch(requestReview(id)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
    }
}

export default connect(msp, mdp)(MyReviewItem)