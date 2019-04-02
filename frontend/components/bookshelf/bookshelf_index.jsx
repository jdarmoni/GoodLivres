import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';
import BookContainer from '../book/book_container';
class BookshelfIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            addBookShelf: false,
            title: "",
            user_id: null
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addBookShelf = this.addBookShelf.bind(this)
    }

    componentDidMount(){
        this.props.requestBookshelves();
        // console.log(this.props.current_user.id)
        // this.setState({[current_user]: this.props.current_user.id})

    }
    handleSubmit(e){
        e.preventDefault();
        
        this.props.createBookshelf({title: this.state.title, user_id: this.state.user_id});
        // this.setState({title: ""})
    }

    update(title){
        
        return e => this.setState({
            [title]: e.target.value
        });
    }
    addBookShelf(){
        
        this.setState({addBookShelf: true, user_id: this.props.currentUser.id})
    }    
    // renderAddBookshelfButton(){
    //     if (this.state.addBookShelf === false) {
    //         return (
    //             <button className="bookShelves-button" onClick={this.addBookShelf}>Add shelf:</button>
    //             )
    // }
    // }
    renderAddBookshelfInput(){
        

        // set a value in the state that starts false; then setState to true when this is called;
        if (this.state.addBookShelf===true){
            return (
                <form onSubmit={this.handleSubmit}>    
                <span className="addBookshelfText">Add a Shelf:</span>
                <input type="text" className="addBookshelfInput" onChange={this.update('title')}></input>
                <input type="submit" className="addBookButton" value="add"></input>
            </form>)
        } else {
            return (
                <button className="bookShelves-button" onClick={this.addBookShelf}>Add shelf:</button>
            )
        }
    }


    render (){
        let bookshelves = Object.values(this.props.bookshelves).map((bookshelf)=>{
            return <BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf} requestBookshelf={this.props.requestBookshelf} deleteBookshelf={this.props.deleteBookshelf}/>
        });
        ;
        let book ="no title"; // <--- the first time through, it's undefined, so we'll render 'no title'.
        if (this.props.bookshelves[this.props.match.params.id]) { // <---- checks to see if bookshelves[id] is defined
            book = this.props.bookshelves[this.props.match.params.id] // <---- if it is, we take the title of the object that 29 returns and put it on 71 and 85
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
                    {this.renderAddBookshelfInput()}
                </ul>

                <div className="bookList">
                    <BookContainer />
                    <h1>{book.id}</h1>  {/* SHOULD DELETE but I just look him */}
                </div>
            </div>
        )}
    }

export default BookshelfIndex