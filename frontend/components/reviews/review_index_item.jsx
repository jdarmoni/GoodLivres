import React from 'react'

class ReviewsIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.deleteReview = this.deleteReview.bind(this);
    }

    componentDidMount() {

        // we aren't getting anything from map dispatch to props
    }
    deleteReview(){
        debugger
        this.props.deleteReview(this.props.review.id)
    }
    render() {
        debugger
        
        return (
            <div className="individual-review">
                <h1 className="review-rating">{this.props.review.rating} stars</h1>
                <p className="review-body">{this.props.review.content}</p>
                <p className="delete-review" onClick={this.deleteReview}>x</p>
            </div>
        )
    }
}


export default ReviewsIndexItem