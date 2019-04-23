import React from 'react'

class EditForm extends React.Component {
    constructor(props){
        super(props)      
        this.state ={
            book: {},
            body: "",
            rating: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        
        if (this.props.location.review !== undefined) {
            this.props.updateReview({ content: this.state.body, book_id: this.props.bookId, user_id: this.props.user.id, rating: this.state.rating, id: this.props.location.review.id });
        } else {
            this.props.createReview({ content: this.state.body, book_id: this.props.bookId, user_id: this.props.user.id, rating: this.state.rating });
        }
        // if create, this.props.createReview; else {editReview({})}
        this.props.history.push(`/book/${this.state.book.id}`)
    }

    componentDidMount(){
        
        this.props.requestBook(this.props.bookId).then((book)=>{
            this.setState({book: book.payload})
        });
    }
    render(){
        
        if (this.state.book.title) {
            return (
                <div className="review-container">
                    <div className="review-header-wrapper">

                        <h1 className="review-edit-header"><span className="green">{this.state.book.title}</span> > <span className="green">Review </span> > Edit</h1>
                        <div className="section1">
                            <img className ="review-book-image" src={`${this.state.book.image}`}/>
                            <span className="section2">
                                <h4 className="review-book-title">{this.state.book.title}</h4>
                             <p className="review-book-author">by {this.state.book.author}</p>
                            </span>
                        </div>
                    </div>
                    <p className="myRatingStars">my rating: </p>
                    <div className="rating">
                            <div class="editRate" id="rateStars">
                                <input type="radio" id="star5" name="rate" value="5" onClick={this.update} />
                                <label for="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" value="4" onClick={this.update} />
                                <label for="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" value="3" onClick={this.update} />
                                <label for="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2" onClick={this.update} />
                                <label for="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" value="1" onClick={this.update} />
                                <label for="star1" title="text">1 star</label>
                            </div>
                        {/* <Link to={`/review/edit/${this.props.book.id}`} className="rating-stars" ><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></Link> */}
                    </div>

<br></br>
                        <h4>What did you think?</h4>

                        <form onSubmit={this.handleSubmit}>
                            <input className="review-box" placeholder="Enter your review (eggs)" type="textarea" onChange={this.update('body')} />
                            {/* <br> */}
                            <input type="submit" className="review-save-button" value="Save" />

                        </form>
                </div>
            )

        } else {
            return null
        }
    }
}
export default EditForm