import ReviewsIndexItem from './review_index_item'
import { connect } from 'react-redux';
import { requestReview, deleteReview } from '../../actions/review_actions'


const msp = (state, ownProps) => {
    
    // doesn't really need to know about other reviews
    return {
        reviews: state.entities.reviews,
        review: ownProps.review,
        user: Object.values(state.entities.users)[0],
        users: state.entities.users,
        book: Object.values(state.entities.books)[0]
    }
}

const mdp = (dispatch) => {
    return {
        requestReview: (id) => dispatch(requestReview(id)),
        deleteReview: (reviewId)=> dispatch(deleteReview(reviewId))
    }
}

export default connect(msp, mdp)(ReviewsIndexItem)