import React from 'react'
import { Link } from 'react-router-dom';


class MyEmptyReview extends React.Component {
    constructor(props) {
        super(props)
        this.deleteReview = this.deleteReview.bind(this);
    }

    componentDidMount() {
    }

    componentDidUpdate() {
        // debugger

    }
    renderDelete() {

        if (this.props.review.user_id === this.props.user.id) {
            return <p className="delete-review" onClick={this.deleteReview}>x</p>
        }
    }

    deleteReview() {
        this.props.deleteReview(this.props.review.id)
    }
    renderDeleteView() {
        // something to check if your id matches the review id
        if (this.props.user.id === this.props.review.user_id) {
            return <p className="delete-review" onClick={this.deleteReview}>x</p>
        }
    }
    writeReview() {
        
        if (this.props.review === undefined) {
            return (
                <Link to={`/review/edit/${this.props.book.id}`} className="rating-stars" >Add a review</Link>
            )
        } else {
            return (
                <Link to={{
                    pathname: `/review/edit/${this.props.book.id}`,
                    review: this.props.review
                }}> <p className="edit-review">see review</p>
                </Link >
            )
        }
    }


    render() {
        let bookshelves = [];
        this.props.book.bookshelves.map((bookshelf) => {
            bookshelves.push(<Link to={`/bookshelf/${bookshelf.id}`} className="bookshelfTableTitle"> {bookshelf.title.toLowerCase()}</Link>);
            bookshelves.push(', ');
        });
        bookshelves = bookshelves.slice(0, bookshelves.length - 1);

        debugger
        return (
            <>
                <div className="my-individual-review">
                    {/* {this.renderDelete()} */}
                    {/* <h1 className="review-header"><span className="review-author">{this.props.review.user_id}</span> rated it: <span className="review-rating">{this.props.review.rating} stars</span> </h1> */}
                    <div className="myReview-content">
                        <span className="myReview-suffix">Shelves:</span>
                        <span className="review-body"></span>
                        <br></br>
                        <span className="myReview-suffix">Review:</span>
                        <span className="review-body"></span>
                        {this.writeReview()}
                    </div>
                </div>
            </>
        )
    }
}


export default MyEmptyReview