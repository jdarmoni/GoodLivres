import EditForm from './edit_form'
import { connect } from 'react-redux';
import {requestBookshelves} from '../../actions/bookshelf_actions';
import {requestBook} from '../../actions/book_actions';
import {createReview, updateReview, requestReviews} from '../../actions/review_actions'

const msp = (state, ownProps) => {
    
    let review;
    
    Object.values(state.entities.reviews).forEach((bookReview) => {
        
        if (bookReview.user_id === Object.values(state.entities.users)[0].id) {
            
            review = bookReview;
        }
    })
    
    return {
        user: Object.values(state.entities.users)[0],
        bookId: ownProps.match.params.id,
        reviews: state.entities.reviews,
        review: review      
    }
}

const mdp = (dispatch) => {
    // 
    return {
        requestReview: (id) => dispatch(requestReview(id)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        requestBook: (id)=> dispatch(requestBook(id)),
        createReview: (review) => dispatch(createReview(review)) ,
        updateReview: (review)=> dispatch(updateReview(review)),
        requestReviews: (bookId)=>dispatch(requestReviews(bookId))
    }
}

export default connect(msp, mdp)(EditForm)