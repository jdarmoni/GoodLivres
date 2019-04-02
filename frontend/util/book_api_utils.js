export const fetchBooks = () => {
  
  return $.ajax({
    method: 'get',
    url: '/api/books'
  });
};

export const fetchBook = (id) => {
  
  return $.ajax({
    method: 'get',
    url: `/api/books/${id}`
  })
}

export const createBook = (book) => {

  return $.ajax({
    method: 'post',
    url: `/api/books`,
    data: { book }
  })
}

export const updateBook = (book) => {
  return $.ajax({
    method: 'patch',
    url: `/api/books/${book.id}`,
    data: { book }
  })
}

export const removeBook = (bookId) => {

  return $.ajax({
    method: 'delete',
    url: `api/books/${bookId}`,
    data: { bookId }
  })
}