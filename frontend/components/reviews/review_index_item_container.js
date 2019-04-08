import ReviewsIndexItem from './review_index_item'
import { connect } from 'react-redux';

const msp = (state) => {
    return {
        reviews: state.entities.reviews
    }
}

const mdp = (dispatch) => {

    return {
        requestReview: (id) => dispatch(requestReview(id))
    }
}

export default connect(msp, mdp)(ReviewsIndexItem)