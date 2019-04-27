import React from 'react';
import {requestBookshelf} from '../../actions/bookshelf_actions';

// EACH OF THESE IS *ONE* OF THE BOOKSHELF <li>s that appear beaneath the Book Show Component - these are what you click to add a book to a bookshelf

class BookBookshelfShow extends React.Component {
    constructor(props){
        super(props);
        this.addToBookshelf = this.addToBookshelf.bind(this)
    }
    componentDidMount(){
        // debugger
        requestBookshelf(this.props.bookshelf.id)
    }

    addToBookshelf(){
        // QUESTION: I MAKE TWO AJAX REQUESTS HERE - ONE FOR All, ONE FOR ACTUAL TARGET?
        
        this.props.createShelving({ book_id: this.props.match.params.id, bookshelf_id: this.props.all });

        this.props.createShelving({book_id: this.props.match.params.id, bookshelf_id: this.props.bookshelf.id});
        // debugger
        this.props.history.push(`/bookshelf/${this.props.bookshelf.id}`)
    }

    render(){
        // debugger
        return(
            <li onClick={this.addToBookshelf} className="bookshelf-button-item">
                {this.props.bookshelf.title}
            </li >
    )}

}

export default BookBookshelfShow