import MyReviewItem from './my_review_item'
import { connect } from 'react-redux';
import { requestReview, deleteReview } from '../../actions/review_actions'


const msp = (state, ownProps) => {

    // doesn't really need to know about other reviews
    return {
        reviews: state.entities.reviews,
        review: ownProps.review,
        user: Object.values(state.entities.users)[0],
        users: state.entities.users,
        book: Object.values(state.entities.books)[0],
        bookshelves: state.entities.bookshelves,
        

    }
}

const mdp = (dispatch) => {
    // debugger
    return {
        requestReview: (id) => dispatch(requestReview(id)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
    }
}

export default connect(msp, mdp)(MyReviewItem)