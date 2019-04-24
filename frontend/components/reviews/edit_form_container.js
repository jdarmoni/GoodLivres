import EditForm from './edit_form'
import { connect } from 'react-redux';
import {requestBookshelves} from '../../actions/bookshelf_actions';
import {requestBook} from '../../actions/book_actions';
import {createReview, updateReview} from '../../actions/review_actions'

const msp = (state, ownProps) => {
    debugger
    // doesn't really need to know about other reviews
    return {
        user: Object.values(state.entities.users)[0],
        bookId: ownProps.match.params.id,
        
    }
}

const mdp = (dispatch) => {
    // debugger
    return {
        requestReview: (id) => dispatch(requestReview(id)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        requestBook: (id)=> dispatch(requestBook(id)),
        createReview: (review) => dispatch(createReview(review)) ,
        updateReview: (review)=> dispatch(updateReview(review))
    }
}

export default connect(msp, mdp)(EditForm)