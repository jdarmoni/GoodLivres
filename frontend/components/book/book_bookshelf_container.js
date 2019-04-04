import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        bookshelf: state.entities.bookshelves
    };
};

const mapDispatchToProps = dispatch => ({
    fetchBookshelf: (id)=>dispatch(fetchBookshelf(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps

)(BookBookshelfsShow));