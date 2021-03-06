import { connect } from 'react-redux';
import BookIndexItem from './book_index_item'
import { requestBook } from '../../actions/book_actions';
import { withRouter } from 'react-router-dom';
import { deleteShelving} from '../../actions/shelving_actions';

const msp = (state, ownProps) => {
    
    let bookReview;
    let shelvings =[];
    let avg = 0;
    let count = 0;
    Object.values(state.entities.reviews).forEach(review => {
        if (review.book_id === ownProps.book.id){
            avg += review.rating;
            count += 1;
            if (review.user_id === Object.values(state.entities.users)[0].id) {
                bookReview = review;
            }
        }
    });
    Object.values(state.entities.shelvings).forEach(shelving=>{
        
        if (shelving.book_id === Object.values(state.entities.books)[0].id && shelving.bookshelf_id === parseInt(ownProps.match.params.id)) {
            shelvings.push(shelving);
        }
    })
    
    return {
        book: ownProps.book,
        bookshelves: Object.values(state.entities.bookshelves),
        review: bookReview,
        avg: avg/count,
        shelvings: shelvings[0]
    };
};

const mdp = (dispatch) => {

    return ({
        requestBook: (id) => dispatch(requestBook(id)),
        deleteShelving: (id)=>dispatch(deleteShelving(id))
    });
};

export default withRouter(connect(msp, mdp)(BookIndexItem));