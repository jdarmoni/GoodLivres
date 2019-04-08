export const fetchReviews = () => {
  debugger
  return $.ajax({
    method: 'get',
    url: '/api/reviews'
  })
}

export const fetchReview = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/reviews/${id}`
  })
}

export const createReview = (review) => {
  // debugger
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
  // debugger
  return $.ajax({
    method: 'delete',
    url: `api/reviews/${reviewId}`,
    data: { reviewId }
  })
}