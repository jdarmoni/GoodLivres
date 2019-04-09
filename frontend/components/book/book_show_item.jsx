import React from 'react';
import BookBookshelfContainer from './book_bookshelf_container'
import ReviewIndexContainer from '../reviews/reviews_index_container'
import { Link } from 'react-router-dom';

class BookShowItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {bookshelves: []};
    this.renderBookShelves = this.renderBookShelves.bind(this);
    this.getImage = this.getImage.bind(this);
    this.nextBook = this.nextBook.bind(this);
    this.previousBook = this.previousBook.bind(this);

  }

  getImage() {
    // debugger
    if (this.props.book.image !== null) {
      return <img src={this.props.book.image} />
    } else {
      return <img src="https://images.gr-assets.com/books/1315485290l/2947829.jpg" />
    }
  }
  componentDidMount(){
    // debugger
    // the second we refresh we'll lose all info in the state - hence why we need to fetch request here after mount
    this.props.requestBookshelves()
    this.props.requestBook(parseInt(this.props.match.params.id)).then((bookshelves)=>{
      this.setState({bookshelves: bookshelves})
    });
  }

  componentDidUpdate() {
    // debugger
    if (parseInt(arguments[0].match.params.id) !== parseInt(this.props.match.params.id)) {
      this.props.requestBook(parseInt(this.props.match.params.id))
    }
  }

  renderBookShelves(){
    // debugger
    let tuna = this.props.bookshelves.map((bookshelf) => {
      return <BookBookshelfContainer bookshelf={bookshelf}/>; // bookshelf index item? is that spagetthi code?!
    })    
    return tuna
  }
  nextBook(){
    // debugger
    // you need to be able to see if this.props.book.id + 1 EXISTS - can't fall off the cliff!
    this.props.history.push(`/book/${(this.props.book.id + 1)}`)
  }
  previousBook(){
    this.props.history.push(`/book/${(this.props.book.id - 1)}`)

  }










  render(){
    // debugger

    let bookImages = [<Link to={`/book/8`}><img src="https://images.gr-assets.com/books/1433739086l/33313.jpg" /></Link>, 
                      <Link to={`/book/4`}><img src="https://images.gr-assets.com/books/1529845599l/34051011.jpg" /></Link>,
                        // THESE NEED TO BE BOOK SHOW ITEMS, THAT HAVE ON CLICKS LINKING TO THEIR IDS. YOU CAN .SAMPLE FROM ARRAY TO MAKE RANDOM
                      <Link to={`/book/3`}><img src="https://images.gr-assets.com/books/1327786035l/28922.jpg" /></Link>]

    if (!this.props.book.title){
      return null
    } else {
      
      return (
        <>
  {/* Book Show: */}
            <div className="book-image-col"> {this.getImage()}
            
              <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
              </div>

               <div className="bookshelf-button">
                  <ul>
                      {this.renderBookShelves()}
                  </ul>
              </div>
            <button onClick={this.previousBook}>Previous</button>
            <button onClick={this.nextBook}>Next</button>
            </div>

            <div className="book-content">

              <h1 className="book-title">{this.props.book.title}</h1>
              <span className="book-author">by {this.props.book.author}</span>
              <p>{this.props.book.description}</p>
              
            
                <div className="reviews">
                  <ReviewIndexContainer bookId={this.props.book.id}/>
                </div>

            </div>
            

{/* Right Portion:  */}

            <div className ="Readers-Also">
              <div className ="books-carousel">
                <span className='readers-also-text'>READERS ALSO ENJOYED</span>
                   <ul>{bookImages}</ul>
              </div>

              <div className ="about-author">
                <div className="another-about-author">
                  <h1 className="author-name">ABOUT JULIEN DARMONI</h1>

                  <img className="author-photo" src="https://media.licdn.com/dms/image/C4D03AQEedUwaagnfqw/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=w-v60mGptPjgppeLWBTJpnprSEQiiOab1fRcG-jPn7w"/>
                  <span className ="author-name2">Julien Darmoni is the greatest programmer of his generation. Despite this, he remains humble, gracious, and extremely powerful</span>
                </div>   
              </div>

            </div>
        </>
    )
  }
  }
}

export default BookShowItem