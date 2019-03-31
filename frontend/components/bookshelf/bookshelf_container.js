import { connect } from 'react-redux';
import { requestBookshelves, requestBookshelf } from '../../actions/bookshelf_actions';
import BookshelfIndex from './bookshelf_index';

const mapStateToProps = (state, ownProps) => {
   debugger
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
    createBookshelf: (bookshelf)=>dispatch(createBookshelf(bookshelf))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookshelfIndex);
