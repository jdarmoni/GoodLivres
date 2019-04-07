import Browse from './browse';
import { requestAllBooks } from '../../actions/book_actions';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

const msp = (state)=>{
    
    return {
        books: state.entities.books
    }
}

const mdp = dispatch=> ({
    requestAllBooks: () => dispatch(requestAllBooks()),
})

export default withRouter(connect(msp, mdp)(Browse));