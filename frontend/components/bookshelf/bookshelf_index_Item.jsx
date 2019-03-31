import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class BookshelfIndexItem extends React.Component {
    constructor(props){
        super(props);
        if (this.props.bookshelf) {
            this.state= {bookshelf: this.props.bookshelf }
        } else {
            this.state = {
            }
        };
        this.update = this.update.bind(this);
    }

    update(){
        // debugger
        this.setState({[this.props.bookshelf]: this.props.bookshelf})
        this.props.history.push(`/books/${this.props.bookshelf.id}`);
    }   

    render() {
        // debugger
        // if you hit render after having hit update, return (<li>{this.props.match.params.id} </>)
        return (<li onClick={this.update}> {this.props.bookshelf.title}</li>)
        }

};

export default withRouter(BookshelfIndexItem);
