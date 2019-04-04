import React from 'react';
import {requestBookshelf} from '../../actions/bookshelf_actions';

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
        // debugger
        this.props.createShelving({book_id: this.props.match.params.id, bookshelf_id: this.props.bookshelf.id});
        // debugger
        // console.log(this.props.bookshelf.title),
        // this.props.history.push(`/${this.props.bookshelf.id}`)
    }

    render(){
        // debugger
        return(
            <li onClick={this.addToBookshelf}>
                {this.props.bookshelf.title}
            </li >
    )}

}

export default BookBookshelfShow