import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item'

class BookshelfIndex extends React.Component{
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    componentDidMount(){
        this.props.requestBookshelves();

    }
    componentDidUpdate(){

    }

    update() {
        // debugger
    } 

    render (){
        let bookshelves = Object.values(this.props.bookshelves).map((bookshelf)=>{
            return <BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf} requestBookshelf={this.props.requestBookshelf}/>
        });
        ;
        let book ="no title"; // <--- the first time through, it's undefined, so we'll render 'no title'.
        if (this.props.bookshelves[this.props.match.params.id]) { // <---- checks to see if bookshelves[5] is defined
            book = this.props.bookshelves[this.props.match.params.id] // <---- if it is, we take the title of the object that 29 returns
        } 
        console.log(this.props.bookshelves)
        return (
            <div className="bookshelfContainer">
                <div id="myBooksCol">

                    <h2 onClick={this.update}>
                        {book.title}
                    </h2> 

                </div>

                <ul className ="bookShelves">
                    {bookshelves}
                </ul>
                <div className="bookList">
                    <h1>{book.id}</h1>
                </div>
            </div>
        )}
    }

export default BookshelfIndex