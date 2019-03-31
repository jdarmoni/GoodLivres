import { connect } from 'react-redux';
import { requestBookshelves, requestBookshelf } from '../../actions/bookshelf_actions';
import BookshelfIndex from './bookshelf_index';

const mapStateToProps = (state, ownProps) => {
   console.log('eggs')
   console.log(state.entities.bookshelves) 
   debugger
//    
    // console.log(bookshelvesObj)
    return {
        bookshelves: state.entities.bookshelves,
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    requestBookshelves: () => dispatch(requestBookshelves()),
    requestBookshelf: (id)=> dispatch(requestBookshelf(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookshelfIndex);
