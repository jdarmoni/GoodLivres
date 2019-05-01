import { connect } from 'react-redux';
import { requestBookshelves, requestBookshelf, createBookshelf, deleteBookshelf } from '../../actions/bookshelf_actions';
import BookshelfIndex from './bookshelf_index';
import { withRouter } from 'react-router-dom';
import { requestAllReviews} from '../../actions/review_actions';
import { requestShelvings } from '../../actions/shelving_actions'

const mapStateToProps = (state, ownProps) => {
   
    return {
        bookshelves: state.entities.bookshelves,
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    requestBookshelves: () => dispatch(requestBookshelves()),
    requestBookshelf: (id)=> dispatch(requestBookshelf(id)),
    createBookshelf: (bookshelf)=>dispatch(createBookshelf(bookshelf)),
    deleteBookshelf: (bookshelfId)=>dispatch(deleteBookshelf(bookshelfId)),
    requestAllReviews: ()=>dispatch(requestAllReviews()),
    requestShelvings: (bookId)=>dispatch(requestShelvings(bookId))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
    
    )(BookshelfIndex));