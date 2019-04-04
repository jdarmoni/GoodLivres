import React from 'react';
import { Link } from 'react-router-dom';

class BookIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // this.props.requestBook(parseInt(this.props.match.params.id))
  }

  render(){
    debugger

    return (
      <>
      <tr className={`${this.props.book.title}-row`}>
          {/*           <Link to={ `/books/${this.props.books.id}`, props={this.props} } > <td> {this.props.book.title}</td></Link> */}
        <Link to={`/book/${this.props.book.id}`} > <td> {this.props.book.title}</td></Link>
        <td>{this.props.book.author}</td>
        <td></td>
      </tr>
      </>
      )
  }
}

export default BookIndexItem;