export const fetchBooks = (bookshelfId) => {
  // now in my params I will have a key of bookshelf pointing to the current bookshelf
  // will need to pass current bookshelfId whenever I call fetchBooks
  debugger
  return $.ajax({
    method: 'get',
    url: `/api/books`,
    data: {bookshelfId}
  });
  // i tried removing curlies, since it seems to dislike those, but no dice
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