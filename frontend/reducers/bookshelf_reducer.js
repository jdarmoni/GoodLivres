import {RECEIVE_BOOKSHELF, RECEIVE_ALL_BOOKSHELVES, REMOVE_BOOKSHELF} from '../actions/bookshelf_actions';
import merge from 'lodash/merge'

export default (state={}, action)=> {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_BOOKSHELVES:
            debugger
            console.log(action)
            // the payload came as an array and here in the reducer i'm converting it into an obj so that later I can key into the entities.bookshelves IDs (in index) and return the object.title
            let bookshelvesObj = action.bookshelves.reduce((obj, bookshelf) => {
                 obj[bookshelf.id] = bookshelf
                return obj
            }, {} )
            return bookshelvesObj
        case RECEIVE_BOOKSHELF:
            
            return merge({}, state, {[action.payload.id]: action.payload});
        case REMOVE_BOOKSHELF:
            let newState = merge({}, state);
            delete newState[action.bookshelfId];
            return newState
        default:
            return state;
    }
}