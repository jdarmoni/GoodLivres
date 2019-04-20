import React from 'react';
import { Link } from 'react-router-dom';
import {deleteShelving} from '../../actions/shelving_actions';

class BookIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.deleteThisShelf = this.deleteThisShelf.bind(this)
    this.getImage = this.getImage.bind(this)
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
    debugger
    // these correspond to book_index.jsx!
    return (
      <>
      <tr className={`book-row`}>
{/* image */}<td>{this.getImage()}</td> 
{/* title */}<Link to={`/book/${this.props.book.id}`} > <td><span className="bookItemTitle"> {this.props.book.title} </span> </td></Link>
{/* author */}<td>{this.props.book.author}</td>
{/* rating */}<td>{this.props.book.pages}</td>
{/*  */}    <td>{this.props.book.published_date}</td>
        
          <td><span onClick={this.deleteThisShelf} className="removeBook">X</span> </td> 
      </tr>
      </>
      )
  }
}

export default BookIndexItem;