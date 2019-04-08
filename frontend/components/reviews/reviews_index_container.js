import ReviewsIndex from './reviews_index'
import { connect } from 'react-redux';
import {requestReviews} from '../../actions/review_actions'
const msp = (state)=> {
    return {
        reviews: state.entities.reviews
    }
}

const mdp = (dispatch)=> {

    return {
        requestReviews: ()=> dispatch(requestReviews())
    }
}

export default connect(msp, mdp)(ReviewsIndex)