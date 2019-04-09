import React from 'react';
import ReviewsIndexItemContainer from './review_index_item_container';

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
        // debugger
        const reviews = Object.values(this.props.reviews).map((review) => {
            debugger
            return <ReviewsIndexItemContainer key={review.id} review={review} />
        })
        return (
            <div>
                <button onClick={this.writeReview}>write a review</button>
                {this.renderWriteReview()}
                <h1>Reviews!</h1>

                <ul>{reviews}</ul>
            </div>
        )
    }
}


export default ReviewsIndex