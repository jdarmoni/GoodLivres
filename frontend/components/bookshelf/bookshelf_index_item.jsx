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
    }

    deleteBookshelf(){
        this.props.deleteBookshelf(this.props.number);
    }


    update(){
        
        this.setState({ bookshelf: this.props.bookshelf[this.props.number]})
        this.props.history.push(`/bookshelf/${this.props.number}`);
    }   

    render() {
        
        return (<li ><span onClick={this.update} className="individualBookshelf"> {this.props.bookshelf[this.props.number].title}</span> <span className="deleteMe" onClick={this.deleteBookshelf}> x </span></li>)
        }

};

export default withRouter(BookshelfIndexItem);
