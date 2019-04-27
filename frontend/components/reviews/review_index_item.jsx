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
    renderDelete(){
        debugger
        if(this.props.review.user_id === this.props.user.id){
            return <p className="delete-review" onClick={this.deleteReview}>x</p>
        }
    }

    deleteReview(){
        this.props.deleteReview(this.props.review.id) 
    }
    renderDeleteView(){
        // something to check if your id matches the review id
        if (this.props.user.id === this.props.review.user_id) {
            return <p className="delete-review" onClick={this.deleteReview}>x</p>
        }
    }
    render() {
        
        return (
            <>
            <div className="individual-review">
                {this.renderDelete()}                
                <h1 className="review-header"><span className="review-author">{this.props.review.user_id}</span> rated it: <span className="review-rating">{this.props.review.rating} stars</span> </h1>
                <p className="review-body">{this.props.review.content}</p>
            </div>
            </>
        )
    }
}


export default ReviewsIndexItem