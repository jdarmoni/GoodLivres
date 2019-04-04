import {RECEIVE_SHELVING, RECEIVE_ALL_SHELVINGS, REMOVE_SHELVING} from '../actions/shelving_actions';
import merge from 'lodash/merge'

export default (state={}, action)=> {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_SHELVINGS:
            debugger
            return action.shelvings
        case RECEIVE_SHELVING:
            debugger    
            return merge({}, state, {[action.payload.id]: action.payload});
        case REMOVE_SHELVING:
        
            let newState = merge({}, state);
            delete newState[action.shelvingId];
            
            return newState
        default:
            return state;
    }
}