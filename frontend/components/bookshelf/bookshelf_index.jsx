import React from 'react';
import {Link} from 'react-router-dom'
import BookshelfIndexItem from './bookshelf_index_item'

class BookshelfIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.bookshelf;
        this.update = this.update.bind(this);
    }

    componentDidMount(){
        this.props.requestBookshelves()       
    }

    update() {
        debugger
        
        // this.props.history.push(`/books/${this.props.bookshelf.id}`);
        // this.setState({ [this.props.bookshelf.id]: this.props.bookshelf })
    } 

    render (){
        let bookshelves = this.props.bookshelves.map((bookshelf)=>{
            return <BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf} />
        });
        
        return (
            <div>
                <div id="myBooksCol">
                    <h2 onClick={this.update}> {this.props.bookshelf.title}</h2> {/*  this is defined by the state*/}

                </div>

                <ul className ="bookShelves">
                    {bookshelves}
                </ul>
            </div>
            // </section>
        )}
    }

export default BookshelfIndex