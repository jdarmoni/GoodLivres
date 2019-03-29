import * as APIUtil from '../util/bookshelf_api_utils'

export const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF";
export const RECEIVE_ALL_BOOKSHELVES = "RECEIVE_ALL_BOOKSHELVES";
export const REMOVE_BOOKSHELF = "REMOVE_BOOKSHELF";

export const receiveAllBookshelves = () => ({
    type: RECEIVE_ALL_BOOKSHELVES,
    bookshelves
});

export const receiveBookshelf = (payload) => ({
    type: RECEIVE_BOOKSHELF,
    payload: payload
});

export const removeBookshelf = (bookshelf) => ({
    type: REMOVE_BOOKSHELF,
    bookshelfId: bookshelf.id
});

export const requestBookshelves = () => (dispatch)=>{ 
    debugger
    return (
        APIUtil.fetchBookshelves().then((bookshelves)=> {
            debugger
            return dispatch(RECEIVE_ALL_BOOKSHELVES(bookshelves))  
            })
        )
}

export const requestBookshelf = (id) => (dispatch) => {
    return APIUtil.fetchBookshelf(id).then((bookshelf) => dispatch(RECEIVE_BOOKSHELF(bookshelf)))
}

export const createBookshelf = (bookshelf) => (dispatch) => {
    return APIUtil.createBookshelf(bookshelf).then((bookshelf) => dispatch(RECEIVE_BOOKSHELF(bookshelf)))
}

export const updateBookshelf = (id)=> (dispatch)=> {
    return APIUtil.updateBookshelf(id).then( (bookshelf)=>dispatch(RECEIVE_BOOKSHELF(bookshelf)))
}

export const deleteBookshelf = (bookshelfId)=>(dispatch)=>{
    return APIUtil.removeBookshelf(bookshelfId).then( (bookshelf)=>dispatch(REMOVE_BOOKSHELF(bookshelf)))
}