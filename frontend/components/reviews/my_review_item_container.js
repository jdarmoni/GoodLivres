import MyReviewItem from './my_review_item'
import { connect } from 'react-redux';
import { requestReview, deleteReview } from '../../actions/review_actions'


const msp = (state, ownProps) => {

    return {
        reviews: state.entities.reviews,
        review: ownProps.review,
        user: Object.values(state.entities.users)[0],
        users: state.entities.users,
        book: state.entities.books[ownProps.book],
        bookshelves: state.entities.bookshelves,
        

    }
}

const mdp = (dispatch) => {
    
    return {
        requestReview: (id) => dispatch(requestReview(id)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
    }
}

export default connect(msp, mdp)(MyReviewItem)