import * as APIUtil from '../util/review_api_utils'

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveAllReviews = (reviews) => {
    return ({
        type: RECEIVE_ALL_REVIEWS,
        payload: reviews
    });
};

export const receiveReview = (payload) => {
    return {
        type: RECEIVE_REVIEW,
        payload: payload
    };
};

export const removeReview = (review) => {

    return {

        type: REMOVE_REVIEW,
        reviewId: review.id
    };
};

export const requestAllReviews = ()=>(dispatch)=> {
    
    return (
        APIUtil.fetchAllReivews().then((reviews)=>{
            
            return dispatch(receiveAllReviews(reviews))
        })
    )
}

export const requestReviews = (bookId) => (dispatch) => {

    return (
        APIUtil.fetchReviews(bookId).then((reviews) => {
            return dispatch(receiveAllReviews(reviews))
        })
    );
};

export const requestReview = (id) => (dispatch) => {
    return (
        APIUtil.fetchReview(id).then((review) => {

            return dispatch(receiveReview(review))
        }

        )
    );
};

export const createReview = (review) => (dispatch) => {
    
    return APIUtil.createReview(review).then((review) => {
        
        dispatch(receiveReview(review));
    }
    );
};

export const updateReview = (review) => (dispatch) => {
    
    return APIUtil.updateReview(review).then((review) => {
        
        dispatch(receiveReview(review))
    }
    )
}

export const deleteReview = (reviewId) => (dispatch) => {
    
    return APIUtil.removeReview(reviewId).then((review) => {
        
        dispatch(removeReview(review));
    }
    );

};