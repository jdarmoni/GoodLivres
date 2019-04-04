import React from 'react';
import { fetchBookshelf } from '../../util/bookshelf_api_utils';

class BookBookshelfShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBookshelf(this.props.match.params.id)
    }

    addToBookshelf(){
        console.log(this.props.bookshelf.title)
    }
    render(){
        return(
            <li onClick={this.addToBookshelf}>
                {this.props.title}
            </li >
    )}

}

export default BookBookshelfShow