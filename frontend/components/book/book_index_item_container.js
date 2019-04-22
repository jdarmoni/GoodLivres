import { connect } from 'react-redux';
import BookIndexItem from './book_index_item'
import { requestBook } from '../../actions/book_actions';
import { withRouter } from 'react-router-dom';
const msp = (state, ownProps) => {
    debugger
    return {
        book: ownProps.book,
        bookshelves: Object.values(state.entities.bookshelves)
    };
};

const mdp = (dispatch) => {

    return ({
        requestBook: (id) => dispatch(requestBook(id)),
    });
};

export default withRouter(connect(msp, mdp)(BookIndexItem));