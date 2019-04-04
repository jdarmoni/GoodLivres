import React from 'react';
import {requestBooks} from '../../actions/book_actions';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentBookshelf: this.props.currentBookshelf};
  }

  componentDidMount(){
    debugger
    
    if (this.props.currentBookshelf > 0) {
      debugger
      // requestBooks errors out, I believe
      this.props.requestBooks(this.props.currentBookshelf)
      // it hits AJAX, then doesn't continue on to action creator, which suggests that it's erroring out - but I'm not sure how to debug the ajax
    }     
    debugger
    // this.props.requestShelvings(this.state.currentBookshelf);
    
  }

  componentDidUpdate(){
    debugger
    if (this.state.currentBookshelf !== this.props.match.params.id) {
      this.props.requestBooks(this.props.match.params.id).then( ()=>{
        this.setState({currentBookshelf: this.props.match.params.id})
      })
      
    }
  }

  render(){
      let books = Object.values(this.props.books).map((book)=>{
        return <BookIndexItem book={book} key={book.id}/> // have to pass shelvings, because you don't have a container = REFACTOR
      });
    debugger
    return (
        <table className="bookIndexTable">
          <thead className ="BookIndexTableHeader"> 
          <th>Image</th>
          <th>title</th>
          <th>author</th>  
          <th>date read</th>
          <th></th> 
          </thead> 
          {books}
        </table>
      )
  }
}

export default BookIndex;