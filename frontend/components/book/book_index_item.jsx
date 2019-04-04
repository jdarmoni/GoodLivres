import React from 'react';
import { Link } from 'react-router-dom';
import {deleteShelving} from '../../actions/shelving_actions'
class BookIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.deleteThisShelf = this.deleteThisShelf.bind(this)
  }

  componentDidMount(){
    // this.props.requestBook(parseInt(this.props.match.params.id))
  }

  deleteThisShelf(){
    debugger
    // this just needs to know the shelving ID - get that from mapStateToProps
    // deleteShelving
    
  }

  render(){
    debugger

    return (
      <>
      <tr className={`${this.props.book.title}-row`}>
        <td></td>
        <Link to={`/book/${this.props.book.id}`} > <td><span className="bookItemTitle"> {this.props.book.title} </span> </td></Link>
        <td>{this.props.book.author}</td>
        <td></td>
          <td><span onClick={this.deleteThisShelf} className="removeBook">X</span> </td> 
      </tr>
      </>
      )
  }
}

export default BookIndexItem;