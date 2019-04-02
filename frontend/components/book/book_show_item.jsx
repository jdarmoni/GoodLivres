import React from 'react';

class BookShowItem extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // the second we refresh we'll lose all info in the state - hence why we need to fetch request here after mount
    
    this.props.requestBook(parseInt(this.props.match.params.id));
  }

  render(){
    
    if (!this.props.book.title){
      return null
    } else {
      
      return (
        <div className = "book-image-container">
          <div className="book-image-col"> {/* float left */} </div>
          <h1 className="book-title">{this.props.book.title}</h1>

          <span className="book-author">by: {this.props.book.author}</span>
          <p>{this.props.book.description}</p>
      </div>
    )
  }
  }
}

export default BookShowItem