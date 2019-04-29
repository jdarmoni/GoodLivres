import { RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS, REMOVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:

            return action.payload

        case RECEIVE_REVIEW:
            
            return merge({}, state, { [action.payload.id]: action.payload });
            
        case REMOVE_REVIEW:
            
            let newState = merge({}, state);
            delete newState[action.reviewId];

            return newState
        default:
            return state;
    }
};