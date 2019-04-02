import React from 'react';
import {requestBooks} from '../../actions/book_actions';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    
    this.props.requestBooks();
  }

  render(){
      let books = Object.values(this.props.books).map((book)=>{
        return <BookIndexItem book={book} key={book.id}/>
      });
    
    return (
        <table className="bookIndexTable">
          <thead className ="BookIndexTableHeader"> 
            <th>title</th> <th>author</th>  <th>date read</th>
          </thead> 
          {books}
        </table>
      )
  }
}

export default BookIndex;