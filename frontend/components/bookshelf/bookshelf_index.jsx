import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item'

class BookshelfIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            addBookShelf: false
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addBookShelf = this.addBookShelf.bind(this)
    }

    componentDidMount(){
        this.props.requestBookshelves();

    }
    handleSubmit(e){
        e.preventDefault();
        debugger
        this.props.createBookshelf({[title]: e.target.value});
    }

    addBookShelf(){
        debugger
        this.setState({addBookShelf: true})

    }    
    // renderAddBookshelfButton(){
    //     if (this.state.addBookShelf === false) {
    //         return (
    //             <button className="bookShelves-button" onClick={this.addBookShelf}>Add shelf:</button>
    //             )
    // }
    // }
    renderAddBookshelfInput(){
        debugger
        // set a value in the state that starts false; then setState to true when this is called;
        if (this.state.addBookShelf===true){
            return (
                <form onSubmit={this.handleSubmit}>    
                <span className="addBookshelfText">Add a Shelf:</span>
                <input type="text" className="addBookshelfInput"></input>
                <input type="submit" className="addBookButton" value="add"></input>
            </form>)
        } else {
            return (
                <button className="bookShelves-button" onClick={this.addBookShelf}>Add shelf:</button>
            )
        }
    }

    update() {
        // debugger
    } 

    render (){
        let bookshelves = Object.values(this.props.bookshelves).map((bookshelf)=>{
            return <BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf} requestBookshelf={this.props.requestBookshelf}/>
        });
        ;
        let book ="no title"; // <--- the first time through, it's undefined, so we'll render 'no title'.
        if (this.props.bookshelves[this.props.match.params.id]) { // <---- checks to see if bookshelves[5] is defined
            book = this.props.bookshelves[this.props.match.params.id] // <---- if it is, we take the title of the object that 29 returns
        } 
        return (
            <div className="bookshelfContainer">
                <div id="myBooksCol">
                    <h2 onClick={this.update}>
                        My Books: <span className="h2-shelf"> {book.title}</span>
                    </h2> 

                </div>

                <ul className ="bookShelves">
                    <li className="bookShelves-header">Bookshelves:</li>
                    {bookshelves} 
                    {/* {this.renderAddBookshelfButton()} */}
                    {this.renderAddBookshelfInput()}
                </ul>

                <div className="bookList">
                    <h1>{book.id}</h1>
                </div>
            </div>
        )}
    }

export default BookshelfIndex