import React from 'react';
import { Link } from 'react-router-dom';
import { deleteBookshelf } from '../../actions/bookshelf_actions';
import { withRouter } from 'react-router-dom';


class BookshelfIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            [this.props.bookshelf.id]: this.props.bookshelf
        };

        this.update = this.update.bind(this);
    }
    componentDidMount(){
    
    }
    update(){
        debugger
        this.props.history.push(`/books/${this.props.bookshelf.id}`);
        this.setState({[this.props.bookshelf.id]: this.props.bookshelf })
    }   

    //if there 
    render() {
        return (
            <li onClick={this.update}>{this.props.bookshelf.title}</li>);
        }
};

export default withRouter(BookshelfIndexItem);
