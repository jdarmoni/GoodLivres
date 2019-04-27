export const fetchAllReivews = () => {
  // probably need to account for not having a bookId in the controller
  return $.ajax({
    method: 'get',
    url: '/api/reviews',
  })
}

export const fetchReviews = (bookId) => {
  // debugger
  // do you need to pass fetchReviews 'reviews' to be able to pass it as data?
  return $.ajax({
    method: 'get',
    url: '/api/reviews',
    data: {bookId}
  })
}

export const fetchReview = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/reviews/${id}`
  })
}

export const createReview = (review) => {
  return $.ajax({
    method: 'post',
    url: `/api/reviews`,
    data: { review }
  })
}

export const updateReview = (review) => {
  
  return $.ajax({
    method: 'patch',
    url: `/api/reviews/${review.id}`,
    data: { review }
  })
}

export const removeReview = (reviewId) => {
  
  return $.ajax({
    method: 'delete',
    url: `api/reviews/${reviewId}`,
    data: { reviewId }
  })
}