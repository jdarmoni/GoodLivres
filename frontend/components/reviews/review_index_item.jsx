import React from 'react'
import { Link } from 'react-router-dom';


class ReviewsIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.deleteReview = this.deleteReview.bind(this);
    }

    componentDidMount() {
    }

    componentDidUpdate(){
        // debugger

    }

    deleteReview(){
        // debugger
        this.props.deleteReview(this.props.review.id) 
    }
    renderDeleteView(){
        // something to check if your id matches the review id
        if (this.props.user.id === this.props.review.user_id) {
            return <p className="delete-review" onClick={this.deleteReview}>x</p>
        }
    }
    render() {
        // debugger
        // something like users[this.props.review.user_id]
        return (
            <div className="individual-review">
                <p className="delete-review" onClick={this.deleteReview}>x</p>
                
                <Link 
                    to={{
                        pathname: `/review/edit/${this.props.book.id}`,
                        review: this.props.review 
                }}><p className="edit-review">o</p>
                </Link>
                
                <h1 className="review-header"><span className="review-author">{this.props.review.user_id}</span> rated it: <span className="review-rating">{this.props.review.rating} stars</span> </h1>
                <p className="review-body">{this.props.review.content}</p>
            </div>
        )
    }
}


export default ReviewsIndexItem