import React from 'react'
import { Link } from 'react-router-dom';

class EditForm extends React.Component {
    constructor(props){
        super(props)      
        this.state ={
            book: {},
            body: undefined,
            rating: 0
            // when you're feeling braver, refactor this.state.rating / vs / this.rating
        }
        this.review;
        this.rating = 0; 
        this.updateStar = this.updateStar.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }
    updateStar(e){
        
        this.rating = parseInt(e.target.value)
    }
    toggleStars() {
        let current_user = this.props.user;
        let reviews = Object.values(this.props.reviews);
        
        // for each review
        for (let i = 0; i < reviews.length; i++ ) {
            if (reviews[i].user_id === current_user.id) {
                
                this.review = reviews[i];
                this.rating = this.review.rating
            }
        }
        if (this.review === undefined || this.review.rating === 0 || document.getElementById('rateStars') === null) { return null }
        document.getElementById(`star${this.review.rating}`).checked = true;
    }
    handleSubmit(e) {
        e.preventDefault();
        
        if (this.props.location.review !== undefined) {
            this.props.updateReview({ content: this.state.body, book_id: this.props.bookId, user_id: this.props.user.id, rating: this.rating, id: this.props.location.review.id });
        } else {
            this.props.createReview({ content: this.state.body, book_id: this.props.bookId, user_id: this.props.user.id, rating: this.rating });
        }
        // if create, this.props.createReview; else {editReview({})}
        this.props.history.push(`/book/${this.state.book.id}`)
    }
    getImage() {
        if (this.state.book.image !== null) {
            return <img className="review-book-image" src={`${this.state.book.image}`} />
        } else {
            return <img className="review-book-image" src="https://images.gr-assets.com/books/1315485290l/2947829.jpg" />
        }
    }
    writeReview(){
        
        if (this.props.review !== undefined && document.getElementsByClassName('review-box')[0]!== undefined) {
            if (this.state.body === undefined) {
                this.setState({body: this.props.review.content})
                document.getElementsByClassName('review-box')[0].value = this.props.review.content
            }
        }
    }
    componentDidMount(){
        
        this.props.requestBook(this.props.bookId).then((book)=>{
            this.setState({book: book.payload})
        });
        
        this.props.requestReviews(parseInt(this.props.bookId));
        this.toggleStars();
        this.writeReview();
    }
    render(){
        
            return (
                <>
                <div className="review-container">
                    <div className="review-header-wrapper">

                        <h1 className="review-edit-header"><span className="green"><Link to={`/book/${this.state.book.id}`}>{this.state.book.title}</Link></span> > <span className="green">Review </span> > Edit</h1>
                        <div className="section1">
                            {this.getImage()}
                            <span className="section2">
                                <h4 className="review-book-title">{this.state.book.title}</h4>
                             <p className="review-book-author">by {this.state.book.author}</p>
                            </span>
                        </div>
                    </div>
                
                    <p className="myRatingStars">My rating: </p>
                    <div className="rating">
                            <div class="editRate" id="rateStars">
                                <input type="radio" id="star5" name="rate" value="5" onClick={this.updateStar} />
                                <label for="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" value="4" onClick={this.updateStar} />
                                <label for="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" value="3" onClick={this.updateStar} />
                                <label for="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2" onClick={this.updateStar} />
                                <label for="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" value="1" onClick={this.updateStar} />
                                <label for="star1" title="text">1 star</label>
                            </div>
                        {/* <Link to={`/review/edit/${this.props.book.id}`} className="rating-stars" ><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></Link> */}
                    </div>

                        <p className="whatdidyouthink">What did you think?</p>

                        <form onSubmit={this.handleSubmit}>
                            <input className="review-box" placeholder="Enter your review (eggs)" type="textarea" onChange={this.update('body')} />
                            {this.writeReview()}
                            
                            <input type="submit" className="review-save-button" value="Save" />
                        </form>
                </div>
                </>
                
            )

        // } else {
        //     return null
        // }
    }
}
export default EditForm