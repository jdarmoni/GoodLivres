import { RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS, REMOVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:

            return action.reviews
        // IS THIS AN ARRAY OR OBJECT? 
        // the payload came as an array and here in the reducer i'm converting it into an obj so that later I can key into the entities.books IDs (in index) and return the object.title
        // let booksObj = action.books.reduce((obj, book) => {
        //   obj[book.id] = book
        //   return obj;
        // }, {});
        // return booksObj;

        case RECEIVE_REVIEW:
            // debugger
            return merge({}, state, { [action.payload.id]: action.payload });
        case REMOVE_REVIEW:

            let newState = merge({}, state);
            delete newState[action.reviewId];

            return newState
        default:
            return state;
    }
};