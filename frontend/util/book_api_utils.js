export const fetchBooks = () => {

  return $.ajax({
    method: 'get',
    url: '/api/book'
  })
}

export const fetchBook = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/book/${id}`
  })
}

export const createBook = (book) => {

  return $.ajax({
    method: 'post',
    url: `/api/book`,
    data: { book }
  })
}

export const updateBook = (book) => {
  return $.ajax({
    method: 'patch',
    url: `/api/book/${book.id}`,
    data: { book }
  })
}

export const removeBook = (bookId) => {

  return $.ajax({
    method: 'delete',
    url: `api/book/${bookId}`,
    data: { bookId }
  })
}