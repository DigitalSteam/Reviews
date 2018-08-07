import React from 'react';
import ReactDOM from 'react-dom';

class OverallReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  overallReviews(){
    var percent = Math.abs(this.props.overallReviews / this.props.reviews.length);
    if (percent < 0.15) {
      return (
        <div className="overallReviewsInfo overallReviewsNegative">
          Overwhelmingly Negative
          <div className="overallReviewsNumber">{`(${this.props.reviews.length} reviews)`}</div>
        </div>
      );
    } else if (percent < 0.3) {
      return (
        <div className="overallReviewsInfo overallReviewsNegative">
          Very Negative
          <div className="overallReviewsNumber">{`(${this.props.reviews.length} reviews)`}</div>
        </div>
      );
    } else if (percent < 0.4) {
      return (
        <div className="overallReviewsInfo overallReviewsNegative">
          Mostly Negative
          <div className="overallReviewsNumber">{`(${this.props.reviews.length} reviews)`}</div>
        </div>
      );
    } else if (percent < 0.6) {
      return (
        <div className="overallReviewsInfo overallReviewsMixed">
          Mixed
          <div className="overallReviewsNumber">{`(${this.props.reviews.length} reviews)`}</div>
        </div>
      );
    } else if (percent < 0.7) {
      return (
        <div className="overallReviewsInfo overallReviewsPositive">
          Mostly Positive
          <div className="overallReviewsNumber">{`(${this.props.reviews.length} reviews)`}</div>
        </div>
      );
    } else if (percent < 0.85) {
      return (
        <div className="overallReviewsInfo overallReviewsPositive">
          Very Positive
          <div className="overallReviewsNumber">{`(${this.props.reviews.length} reviews)`}</div>
        </div>
      );
    } else if (percent <= 1){
      return (
        <div className="overallReviewsInfo overallReviewsPositive">
          Overwhelmingly Positive
          <div className="overallReviewsNumber">{`(${this.props.reviews.length} reviews)`}</div>
        </div>
      );
    } else {
      return (
        <div>No Reviews</div>
      )
    }
  }

  render() {
    return (
      <div className="overallReviews">
        <div className="overallReviewsTitle">Overall Reviews:</div>
        {this.overallReviews()}
      </div>
    );
  }

}

export default OverallReviews;