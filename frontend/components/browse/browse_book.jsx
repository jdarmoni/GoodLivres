import React from 'react';
import {Link} from 'react-router-dom';

class BrowseBook extends React.Component {
    constructor(props){
        super(props)
        this.getImage = this.getImage.bind(this)
    }
    componentDidMount(){
        
    }
    getImage() {
        if (this.props.book.image !== null) {
            return <img src={this.props.book.image} className="browseBookImage"/>
        } else {
            return <img src="https://images.gr-assets.com/books/1315485290l/2947829.jpg" className="browseBookImage" />
        }
    }
    render(){
        return (
            <div className="browseBook">
                <Link to={`/book/${this.props.book.id}`}> {this.getImage()} </Link>
                <Link to={`/book/${this.props.book.id}`}> <h1>{this.props.book.title}</h1></Link>
            </div>
        )
    }
}

export default BrowseBook