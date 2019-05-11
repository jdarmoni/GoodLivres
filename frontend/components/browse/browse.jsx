import React from 'react';
import BrowseBookContainer from './browse_book_container';

class Browse extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
        this.props.requestAllBooks().then( (books)=>{
            
            console.log(books)
        })
    }

    render (){
    let books = Object.values(this.props.books).map((book)=>{
        
        return <BrowseBookContainer key={book.id} book={book}/>
    })
        
        return (
            <ul className ="browseBooksContainer">{books}</ul>
        );
    }
}

export default Browse