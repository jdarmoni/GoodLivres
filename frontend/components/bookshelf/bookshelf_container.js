import { connect } from 'react-redux';
import { fetchBookshelves } from '../../util/bookshelf_api_utils';
import Bookshelf from './bookshelf';

const mapStateToProps = (state) => {
    debugger
    return {
        bookshelves: Object.values(state.entities.bookshelves),
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchBookshelves: () => dispatch(fetchBookshelves())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bookshelf);
