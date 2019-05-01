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
        // this.renderBookshelfTitle = this.renderBookshelfTitle.bind(this);
    }

    componentDidMount(){
        this.props.requestBookshelves().then((bookshelves)=>{
            
            const id = this.props.match.params.id || bookshelves.bookshelves[0].id   
             
            this.setState({ currentBookshelf: id})
        });
        this.props.requestAllReviews().then((reviews)=>{
            
            console.log(reviews.payload)
        });     
        this.props.requestShelvings()  
    }
    
    handleSubmit(e){
        // debugger
        e.preventDefault();
        this.props.createBookshelf({title: this.state.title, user_id: this.state.user_id});
    }

    update(title){
        // debugger
        return e => this.setState({
            [title]: e.target.value
        });
    }
    addBookShelf(){
        // debugger
        this.setState({addBookShelf: true, user_id: this.props.currentUser.id})
    }    
    renderAddBookshelfInput(){
        if (this.state.addBookShelf===true){
            return (
                <form onSubmit={this.handleSubmit}>    
                <span className="addBookshelfText">Add a Shelf:</span>
                <input type="text" className="addBookshelfInput" value={this.state.title} onChange={this.update('title')}></input>
                <input type="submit" className="addBookButton" value="add"></input>
            </form>)
        } else {
            return (
                <button className="bookShelves-button" onClick={this.addBookShelf}>Add shelf:</button>
            )
        }
    }
    renderCurrentBooks() {
        // debugger
        if (this.state.currentBookshelf > 0) {
            return (<>
                {/* should books be being rendered in BookIndex Item? Is doing everything in this component, 'spaghetti'? */}
                <BookContainer currentBookshelf={this.state.currentBookshelf} />
            </>)
        }
    }

    // ********************* BUGGING OUT!!!!!! ********************
    // renderBookshelfTitle(){
    //     debugger
    //     if (Object.values(this.props.bookshelves).length > 0) {
    //         return this.props.bookshelves[this.props.match.params.id].title
    //     }
    // }

    render (){

        let bookshelves = Object.values(this.props.bookshelves).map((bookshelf)=>{
            return <BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf} requestBookshelf={this.props.requestBookshelf} deleteBookshelf={this.props.deleteBookshelf}/>
        });

        let currentBookshelf = this.props.match.params.id || this.state.currentBookshelf; 
        
        return (
            // THIS IS SPGAHETTI I THINK:  HAVE OWN CONTAINER FOR BOOKSHELF INDEXITEM
            <div className="bookshelfContainer">
                <div id="myBooksCol">
                
                    <h2 onClick={this.update}>
                        My Books <span className="h2-shelf"> {/* {this.renderBookshelfTitle()} */}</span>
                    </h2> 

                </div>

                <ul className ="bookShelves">
                    <li className="bookShelves-header">Bookshelves:</li>
                    {bookshelves} 
                    {this.renderAddBookshelfInput()}
                </ul>
                <div className="bookList">
                    {this.renderCurrentBooks()}
                    {/* <h1>{currentBookshelf}</h1>  SHOULD DELETE but I just like him */}
                </div>
            </div>
        )
    }
    }

export default BookshelfIndex