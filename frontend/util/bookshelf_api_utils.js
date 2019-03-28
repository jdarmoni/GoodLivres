export const fetchBookshelves =()=> {
    return $.ajax({
        method: 'get',
        url: '/api/bookshelf'
    })
}

export const fetchBookshelf = (id)=> {
    return $.ajax({
        method: 'get',
        url: `/api/bookshelf/${id}`
    })
}

export const createBookshelf = (bookshelf)=> {
    return $.ajax({
        method: 'post',
        url: `/api/bookshelf/${bookshelf.id}`,
        data: {bookshelf}
    })
}

export const updateBookshelf = (bookshelf)=>{
    return $.ajax({
        method: 'patch',
        url: `/api/bookshelf/${bookshelf.id}`,
        data: {bookshelf}
    })
}

export const removeBookshelf = (bookshelfId)=>{
    return $.ajax({
        method: 'delete',
        url: `api/bookshelf/${bookshelfId}`,
        data: {bookshelfId}
    })
}