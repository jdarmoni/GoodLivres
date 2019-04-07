import BrowseBook  from './browse_book'
import { connect } from 'react-redux';
import { requestBook } from '../../actions/book_actions'

const msp = (state, ownProps)=> {
    
    return {
        book: ownProps.book
    }
}

const mdp = (dispatch) => ({
    requestBook: (id)=>dispatch(requestBook(id))
})

export default connect(msp, mdp)(BrowseBook)