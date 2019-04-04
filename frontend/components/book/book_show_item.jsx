import React from 'react';
import BookBookshelfContainer from './book_bookshelf_container'


class BookShowItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {bookshelves: []}
    this.renderBookShelves = this.renderBookShelves.bind(this)
  }

  componentDidMount(){
    // the second we refresh we'll lose all info in the state - hence why we need to fetch request here after mount
    this.props.requestBookshelves()
    this.props.requestBook(parseInt(this.props.match.params.id)).then((bookshelves)=>{
      this.setState({bookshelves: bookshelves})
    });
  }
  renderBookShelves(){
    debugger
    let tuna = this.props.bookshelves.map((bookshelf) => {
      
      return <BookBookshelfContainer bookshelf={bookshelf}/>; // bookshelf index item? is that spagetthi code?!
      
    })
    
    // component did update?
    return tuna
  }
  render(){
    
    if (!this.props.book.title){
      return null
    } else {
      
      return (
        <div className = "book-image-container">
          <div className="book-image-col"> <img src={`https://images.gr-assets.com/books/1327128714l/28921.jpg`}/> </div>
          <h1 className="book-title">{this.props.book.title}</h1>

          <span className="book-author">by: {this.props.book.author}</span>
          <p>{this.props.book.description}</p>
          <td className="bookshelf-button"><ul>{this.renderBookShelves()}</ul></td>

          {/* add to bookshelf, which is a drop down of any bookshelf this user has */}
      </div>
    )
  }
  }
}

export default BookShowItem