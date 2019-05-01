import {connect} from 'react-redux';
import BookshelfIndexItem from './bookshelf_index_item'
import {requestBookshelf, deleteBookshelf} from '../../actions/bookshelf_actions'
const msp = (state)=>{
    debugger
    return {
        bookshelf: state.bookshelf
    }
}

const mdp = (dispatch)=>{
    return {
        requestBookshelf: (id) => dispatch(requestBookshelf(id)),     
        deleteBookshelf: (id) => dispatch(deleteBookshelf(id))
    }
}

export default connect(msp, mdp)(BookshelfIndexItem)