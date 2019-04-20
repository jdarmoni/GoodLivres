import React from 'react';
import {requestBooks} from '../../actions/book_actions';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentBookshelf: this.props.currentBookshelf};
  }

  componentDidMount(){
    // debugger
    
    if (this.props.currentBookshelf > 0) {
      // debugger
      this.props.requestBooks(this.props.currentBookshelf)
    }     
    // debugger
    // why don't I have this from book_container mdp?
    this.props.requestShelvings(this.state.currentBookshelf);
    
  }

  componentDidUpdate(){
    // debugger
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
    
    return (
      // if you had a 'th' here, have to add to book_index_item!
        <table className="bookIndexTable">
          <thead className ="BookIndexTableHeader"> 
          <th>cover</th>
          <th>title</th>
          <th>author</th>
          <th>pages</th>  
          <th>published date</th>
            </thead> 
          {books}
        </table>
      )
  }
}

export default BookIndex;