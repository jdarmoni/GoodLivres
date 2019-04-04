import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';
import BookContainer from '../book/book_container';
class BookshelfIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            addBookShelf: false,
            title: "",
            user_id: null,
            currentBookshelf: ""
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addBookShelf = this.addBookShelf.bind(this);
        this.renderCurrentBooks = this.renderCurrentBooks.bind(this);
    }

    componentDidMount(){
        
        // let bookshelfId = null;
        // // User.find_by(id: 23).bookshelves.first.id
        // if (this.props.bookshelves[this.props.match.params.id]) {
        //     bookshelfId === this.props.bookshelves[this.props.match.params.id].id
        // } else {
        //     bookshelfId = 1
        // }
        this.props.requestBookshelves().then((bookshelves)=>{
            
            const id = this.props.match.params.id || bookshelves.bookshelves[0].id   
             
            this.setState({ currentBookshelf: id})
        });

        
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createBookshelf({title: this.state.title, user_id: this.state.user_id});
    }

    update(title){
        
        return e => this.setState({
            [title]: e.target.value
        });
    }
    addBookShelf(){
        
        this.setState({addBookShelf: true, user_id: this.props.currentUser.id})
    }    
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
    renderCurrentBooks(){
        debugger
        if (this.state.currentBookshelf > 0) {
            return (<>
                <BookContainer currentBookshelf={this.state.currentBookshelf} />
            </>) 
        }
    }

    render (){

        let bookshelves = Object.values(this.props.bookshelves).map((bookshelf)=>{
            return <BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf} requestBookshelf={this.props.requestBookshelf} deleteBookshelf={this.props.deleteBookshelf}/>
        });
        
        let currentBookshelf = this.props.match.params.id || this.state.currentBookshelf; 
        
        return (
            <div className="bookshelfContainer">
                <div id="myBooksCol">
                    <h2 onClick={this.update}>
                        My Books: <span className="h2-shelf"> {currentBookshelf.title}</span>
                    </h2> 

                </div>

                <ul className ="bookShelves">
                    <li className="bookShelves-header">Bookshelves:</li>
                    {bookshelves} 
                    {this.renderAddBookshelfInput()}
                </ul>
                <div className="bookList">
                    {this.renderCurrentBooks()}
                    <h1>{currentBookshelf}</h1>  {/* SHOULD DELETE but I just like him */}
                </div>
            </div>
        )
    }
    }

export default BookshelfIndex