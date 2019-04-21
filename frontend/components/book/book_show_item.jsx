import React from 'react';
import BookBookshelfContainer from './book_bookshelf_container'
import ReviewIndexContainer from '../reviews/reviews_index_container'
import { Link } from 'react-router-dom';

class BookShowItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bookshelves: []};
    this.renderBookShelves = this.renderBookShelves.bind(this);
    this.getImage = this.getImage.bind(this);
    this.nextBook = this.nextBook.bind(this);
    this.previousBook = this.previousBook.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  getImage() {
    if (this.props.book.image !== null) {
      return <img src={this.props.book.image} />
    } else {
      return <img src="https://images.gr-assets.com/books/1315485290l/2947829.jpg" />
    }
  }
  componentDidMount(){
    this.props.requestBookshelves()
    this.props.requestBook(parseInt(this.props.match.params.id)).then((book)=>{
      this.setState({book: book.payload})
    });
  }

  componentDidUpdate() {
    if (parseInt(arguments[0].match.params.id) !== parseInt(this.props.match.params.id)) {
      this.props.requestBook(parseInt(this.props.match.params.id))
    }
  }

  renderBookShelves(){
    // QUESTION: how can I know if this Book Id is in your 'Read' shelf?  

    let all = 0;
    let shelves = this.props.bookshelves.map((bookshelf) => {
      
      if (bookshelf.title === 'All') {
        all = bookshelf.id 
      } else {
          return <BookBookshelfContainer bookshelf={bookshelf} all={all}/>; 
        } 
    })    
    
    return shelves;
  }
  nextBook(){
    // debugger
    // you need to be able to see if this.props.book.id + 1 EXISTS - can't fall off the cliff!
    this.props.history.push(`/book/${(this.props.book.id + 1)}`)
  }
  previousBook(){
    this.props.history.push(`/book/${(this.props.book.id - 1)}`)
  }

  toggleShow(){
    document.getElementById('shelves').classList.toggle("show");
  }









  render(){
    
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
            
              

               <div className="bookshelf-button" onClick={this.toggleShow}>
                <div className="first-bookshelf"> {this.renderBookShelves()[1]} </div> {/* <--- to grab the first bookshelf */}
                  <button className="shelves-drop-down" ></button>
                    <ul className="shelves" id="shelves">
                        {this.renderBookShelves()}
                    </ul>
              </div>

            <div className="rating">
              <form action="">
              <div class="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">1 star</label>
              </div>
              </form>
              {/* <Link to={`/review/edit/${this.props.book.id}`} className="rating-stars" ><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></Link> */}
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