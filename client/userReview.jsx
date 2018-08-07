import React from 'react';
import ReactDOM from 'react-dom';

class UserReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      readMore: false,
    };
  }

  handleReadClick(event){
    this.setState({readMore: !this.state.readMore})
  }

  review(review){
    var reviewLength = review.split(' ').length;
    if(reviewLength <= 100){
      return review
    } else if(this.state.readMore === false){
      var reviewShort = review.split(' ').slice(0,100).join(' ')
      return (
        <div>
          <div className="review">{reviewShort}</div>
          <a className="readMore" onClick={this.handleReadClick.bind(this)}>READ MORE</a>
        </div>
      );
    } else {
      return (
        <div>
          <div className="review">{review}</div>
          <a className="readLess" onClick={this.handleReadClick.bind(this)}>READ LESS</a>
        </div>
      );
    }
  }

  render() {
    var currentReview = this.props.review
    return (
      this.review(currentReview)
    );
  }

}

export default UserReview;
