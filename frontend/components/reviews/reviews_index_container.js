import ReviewsIndex from './reviews_index'
import { connect } from 'react-redux';
import {requestReviews, createReview} from '../../actions/review_actions'
const msp = (state, ownProps)=> {
    
    return {
        reviews: state.entities.reviews,
        user: Object.values(state.entities.users)[0],
        bookshelves: state.entities.bookshelves,
        book: state.entities.books[ownProps.bookId]
        
    }
}

const mdp = (dispatch)=> {

    return {
        requestReviews: (bookId)=> dispatch(requestReviews(bookId)),
        createReview: (review)=> dispatch(createReview(review)) 
    }
}

export default connect(msp, mdp)(ReviewsIndex)