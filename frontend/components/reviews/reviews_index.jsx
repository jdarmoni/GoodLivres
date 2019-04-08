import React from 'react';
import ReviewsIndexItem from './review_index_item';

class ReviewsIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        debugger
        this.props.requestReviews()
    }

    render(){
        debugger
        const reviews = Object.values(this.props.reviews).map((review) => {
            return <ReviewsIndexItem key={review.id} review={review} />
        })
        return (
            <div>
                <h1>Reviews!</h1>
                <ul>{reviews}</ul>
            </div>
        )
    }
}


export default ReviewsIndex