import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestBookshelf } from '../../actions/bookshelf_actions';
import BookBookshelfShow from './book_bookshelf_show'
import { createShelving } from '../../actions/shelving_actions'

const mapStateToProps = (state) => {
    debugger
    return {
        bookshelves: state.entities.bookshelves
    };
};

const mapDispatchToProps = dispatch => ({
    requestBookshelf: (id)=>dispatch(requestBookshelf(id)),
    createShelving: (id)=>dispatch(createShelving(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps)(BookBookshelfShow));