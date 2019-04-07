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
            };
        };
        this.deleteBookshelf = this.deleteBookshelf.bind(this);
        this.update = this.update.bind(this);
    }
    componentDidMount(){
        debugger
    }

    deleteBookshelf(){
        this.props.deleteBookshelf(this.props.bookshelf.id);
    }


    update(){
        // debugger
        this.setState({[this.props.bookshelf]: this.props.bookshelf})
        this.props.history.push(`/bookshelf/${this.props.bookshelf.id}`);
    }   

    render() {
        return (<li ><span onClick={this.update}> {this.props.bookshelf.title} </span> <span className="deleteMe" onClick={this.deleteBookshelf}> x </span></li>)
        }

};

export default withRouter(BookshelfIndexItem);
