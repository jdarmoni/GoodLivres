import React from 'react'

class ReviewsIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        // the id you want to get is...?
        // this.props.requestReview()
    }

    render() {
        // {this.props.review.content}
        return <h2>a review</h2>
    }
}


export default ReviewsIndexItem