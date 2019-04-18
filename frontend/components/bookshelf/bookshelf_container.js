import { connect } from 'react-redux';
import { requestBookshelves, requestBookshelf, createBookshelf, deleteBookshelf } from '../../actions/bookshelf_actions';
import BookshelfIndex from './bookshelf_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
   
    return {
        // if want (number), object.values
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
    deleteBookshelf: (bookshelfId)=>dispatch(deleteBookshelf(bookshelfId))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
    
    )(BookshelfIndex));