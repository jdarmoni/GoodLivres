import {RECEIVE_BOOKSHELF, RECEIVE_ALL_BOOKSHELVES, REMOVE_BOOKSHELF} from '../actions/bookshelf_actions';
import merge from 'lodash/merge'

export default (state={}, action)=> {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_BOOKSHELVES:
            return action.bookshelves
        case RECEIVE_BOOKSHELF:
            
            return merge({}, state, {[action.bookshelf.id]: action.bookshelf});
        case REMOVE_BOOKSHELF:
            let newState = merge({}, state);
            delete newState[action.bookshelfId];
            return newState
        default:
            return state;
    }
}