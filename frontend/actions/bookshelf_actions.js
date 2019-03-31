import * as APIUtil from '../util/bookshelf_api_utils'

export const RECEIVE_ALL_BOOKSHELVES = "RECEIVE_ALL_BOOKSHELVES";
export const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF";
export const REMOVE_BOOKSHELF = "REMOVE_BOOKSHELF";

export const receiveAllBookshelves = (bookshelves) => {
    
    return ({
        type: RECEIVE_ALL_BOOKSHELVES,
        bookshelves
    })
}
;

export const receiveBookshelf = (payload) => {
   
   return {
       type: RECEIVE_BOOKSHELF,
        payload: payload
   } 
};

export const removeBookshelf = (bookshelf) => {
    
    return {

        type: REMOVE_BOOKSHELF,
        bookshelfId: bookshelf.id
    }
};


export const requestBookshelves = () => (dispatch) => {
    
    return (
        APIUtil.fetchBookshelves().then((bookshelves) => {
            
            return dispatch(receiveAllBookshelves(bookshelves))
        })
    )
}

export const requestBookshelf = (id) => (dispatch) => {
    
    return (
        APIUtil.fetchBookshelf(id).then((bookshelf) => {
            
            return dispatch(receiveBookshelf(bookshelf))}
        
        )
    )
}

export const createBookshelf = (bookshelf) => (dispatch) => {
    return APIUtil.createBookshelf(bookshelf).then((bookshelf) => dispatch(receiveBookshelf(bookshelf)))
}

export const updateBookshelf = (id)=> (dispatch)=> {
    return APIUtil.updateBookshelf(id).then((bookshelf) => dispatch(receiveBookshelf(bookshelf)))
}

export const deleteBookshelf = (bookshelfId)=>(dispatch)=>{
    return APIUtil.removeBookshelf(bookshelfId).then( (bookshelf)=>dispatch(removeBookshelf(bookshelf)))
}