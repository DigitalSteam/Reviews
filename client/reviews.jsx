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
    const helpful = JSON.parse(object.helpful);
    const date = object.reviewDatePosted;
    return (
      <div className="reviewContainer">
        <div className="date">{date}</div>
        <div className="review">{review}</div>
        <div className="recommended">{recommended}</div>
        <div className="helpful">
          <div className="yes">{helpful.yes}</div>
          <div className="no">{helpful.no}</div>
          <div className="funny">{helpful.funny}</div>
          <div className="report">{helpful.report}</div>
        </div>
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