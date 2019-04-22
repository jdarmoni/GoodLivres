import React from 'react';
import { Link } from 'react-router-dom';
import {deleteShelving} from '../../actions/shelving_actions';
import BookBookshelfContainer from './book_bookshelf_container'

class BookIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.deleteThisShelf = this.deleteThisShelf.bind(this);
    this.getImage = this.getImage.bind(this);
    this.state ={
      bookshelves: []
    }
  }

  componentDidMount(){
    
    // debugger
    // this.props.requestBook(parseInt(this.props.match.params.id)) // <---- this breaks everything!!
  }

  deleteThisShelf(){
    // debugger
    // this just needs to know the shelving ID - get that from mapStateToProps
    // deleteShelving
  }
  getImage(){
    // debugger
    if (this.props.book.image !== null ) {
      return <img src={this.props.book.image}/>
    } else {
      return <img src="https://images.gr-assets.com/books/1315485290l/2947829.jpg"/>
    }
  } 

  render(){
    
    let bookshelves = [];
    this.props.book.bookshelves.map((bookshelf) => {
      
      bookshelves.push(<Link to={`/bookshelf/${bookshelf.id}`} className="bookshelfTableTitle"> <li> {bookshelf.title}</li> </Link>);
      bookshelves.push(' ');
    });
    bookshelves = bookshelves.slice(0, bookshelves.length -1)
    
    // these correspond to book_index.jsx!
    return (
      <>
      <tr className={`book-row`}>
{/* image */}<td>{this.getImage()}</td> 
{/* title */}<Link to={`/book/${this.props.book.id}`} > <td><span className="bookItemTitle"> {this.props.book.title} </span> </td></Link>
{/* author */}<td>{this.props.book.author}</td>
  {/* avg rating */} <td></td>
  {/* rating */} <td></td>
  {/* bookshelves */}<td><ul className="bookshelfUL">{bookshelves}</ul></td>

        
          <td><span onClick={this.deleteThisShelf} className="removeBook">x</span> </td> 
      </tr>
      </>
      )
  }
}

export default BookIndexItem;