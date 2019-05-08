import React from 'react';
import ReviewsIndexItemContainer from './review_index_item_container';
import { Link } from 'react-router-dom';
import MyReviewItemContainer from './my_review_item_container';
import MyEmptyReviewContainer from './my_empty_review_container'

class ReviewsIndex extends React.Component {
    constructor(props){
        super(props)
        this.writeReview = this.writeReview.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            body: "",
            rating: 0,
            write: false
        }
    }

    componentDidMount(){
        // debugger
        this.props.requestReviews(this.props.bookId)
    }
    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }
    writeReview() {
        this.setState({ write: true })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview({ content: this.state.body, book_id: this.props.bookId, user_id: this.props.user.id, rating: this.state.rating });
        this.setState({ write: false })

    }
    renderWriteReview() {
        if (this.state.write === true) {
            return (
            <form onSubmit={this.handleSubmit}>
                Body <input type="textarea" onChange={this.update('body')}/>
                Rating <input type="number" max="5" onChange={this.update('rating')}/>
                <input type="submit" value="submit"/>
                
            </form>
            )
        }
    }

    render(){

        const reviews = Object.values(this.props.reviews).map((review) => {
            
            if (review.user_id !== this.props.user.id) {
                return <ReviewsIndexItemContainer key={review.id} review={review}  />
            }
        }, this)

        let myReviews = Object.values(this.props.reviews).map((review) => {
            if (review.user_id === this.props.user.id) {
                return <MyReviewItemContainer key={review.id} review={review} book={this.props.book.id}/>
            } 
        }, this);
        debugger
        return (
            <div>
                {this.renderWriteReview()}
                <h1 className="my-activity-span">My Activity</h1>
                  {/*  */}
                  <ul>{myReviews}</ul>
                <h1 className="reviews-index-header">COMMUNITY REVIEWS <span className="reviews-showing-numbers">showing 1-{reviews.length}</span></h1>
                  <ul>{reviews}</ul>
            </div>
        )
    }
}


export default ReviewsIndex