import React from 'react';
import { Link } from 'react-router-dom';
import { deleteBookshelf } from '../../actions/bookshelf_actions';


const BookshelfIndexItem = ({bookshelf}) => {
    return (
        <li>
                {bookshelf.title}
            {/* <button onClick={() => deleteBookshelf(bookshelves.bookshelf.id)}>Delete</button> */}
        </li>);
};

export default BookshelfIndexItem;
