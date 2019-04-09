import ReviewsIndexItem from './review_index_item'
import { connect } from 'react-redux';
import { requestReview, deleteReview } from '../../actions/review_actions'


const msp = (state, ownProps) => {
    debugger
    // doesn't really need to know about other reviews
    return {
        reviews: state.entities.reviews,
        review: ownProps.review
    }
}

const mdp = (dispatch) => {
    // debugger
    return {
        requestReview: (id) => dispatch(requestReview(id)),
        deleteReview: (reviewId)=> dispatch(deleteReview(reviewId))
    }
}

export default connect(msp, mdp)(ReviewsIndexItem)