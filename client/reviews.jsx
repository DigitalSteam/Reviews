import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  formatReview(object) {
    const name = object.gameName;
    const review = object.review;
    const recommended = object.recommended;
    const helpful = object.helpful;
    const date = object.reviewDatePosted;
    return (
      <div className="Review">
        {name}
        {review}
        {recommended}
        {helpful.yes}{helpful.no}{helpful.report}
        {date}
      </div>
    );
  }

  render() {
    return (
      <div className="ReviewList">
        {this.props.review.map(object => this.formatReview(object))}
      </div>
    );
  }
}

export default Reviews;