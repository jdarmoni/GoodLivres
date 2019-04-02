import * as APIUtil from '../util/book_api_utils'

export const RECEIVE_ALL_BOOKS = "RECEIVE_ALL_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";

export const receiveAllBooks = (books) => {
  debugger
  return ({
    type: RECEIVE_ALL_BOOKS,
    books
  });
};

export const receiveBook = (payload) => {

  return {
    type: RECEIVE_BOOK,
    payload: payload
  };
};

export const removeBook = (book) => {

  return {

    type: REMOVE_BOOK,
    bookId: book.id
  };
};


export const requestBooks= () => (dispatch) => {

  return (
    APIUtil.fetchBooks().then((books) => {

      return dispatch(receiveAllBooks(books))
    })
  );
};

export const requestBook = (id) => (dispatch) => {
  debugger
  return (
    APIUtil.fetchBook(id).then((book) => {
      debugger
      return dispatch(receiveBook(book))
    }

    )
  );
};

export const createBook = (book) => (dispatch) => {

  return APIUtil.createBook(book).then((book) => {

    dispatch(receiveBook(book));
  }
  );
};

export const updateBook = (id) => (dispatch) => {
  return APIUtil.updateBook(id).then((book) => dispatch(receiveBook(book)))
}

export const deleteBook = (bookId) => (dispatch) => {

  return APIUtil.removeBook(bookId).then((book) => {

    dispatch(removeBook(book));
  }
  );

};