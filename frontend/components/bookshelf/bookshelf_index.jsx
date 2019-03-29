import React from 'react';
import {Link} from 'react-router-dom'
import BookshelfIndexItem from './bookshelf_index_item'

class BookshelfIndex extends React.Component{
    
    componentDidMount(){
        
        this.props.requestBookshelves()
        
    }
    
    render (){

        let bookshelves = this.props.bookshelves.map((bookshelf)=>{
            return <BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf} />
        });
        
        return (
            // <section>
            // <h1 className="Eggs">EGGS!</h1>
            <div>
                <div id="myBooksCol">
                    <h2>My Books</h2>
                </div>

                <ul className ="bookShelves">
                    {bookshelves}
                </ul>
            </div>
            // </section>
        )}
    }

export default BookshelfIndex