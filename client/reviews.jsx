import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  formatReview(object, index) {
    const name = object.gameName;
    const review = object.review;
    const recommended = object.recommended;
    let rec = 'Recommended'
    if (!recommended) {
      rec = 'Not Recommended'
    }
    const helpful = JSON.parse(object.helpful);
    const date = object.reviewDatePosted;
    const currentUser = this.props.users[index];
    let username = 'Anonymous';
    let games = 0;
    let reviewCount = 0;
    let picture = 'Anonymous';
    if(currentUser){
      username = currentUser.username;
      games = currentUser.numberOfGames;
      reviewCount = currentUser.numberOfReviews;
      picture = currentUser.userImage;
    }

    return (
      <div className="reviewContainer">
        <div className="userInfoContainer">
          <div className="userLeft">
            <div className="userInfo">
              <img className="profilePicture" src={`${picture}`}></img>
              <div className="nameAndGames">
                <div className="username">{username}</div>
                <div className="numberOfGames">{`${games} products in account`}</div>
              </div>
            </div>
            <div className="numberOfReviews">{`${reviewCount} reviews`}</div>
          </div>
          <div className="userRight">
            <div className={`recommended${recommended}`}> {rec}
            <div className="hoursPlayed">(to do) hrs on record</div>
            </div>
          </div>
        </div>
        <div className="date">{`POSTED: ${date}`}</div>
        <div className="review">{review}</div>
        <div className="helpful">
          <div>Was this review helpful?
            <button className="buttonYes">&#9745; Yes</button>
            <button className="buttonNo">&#9746; No</button>
            <button className="buttonFunny">&#9786; Funny</button>
          </div>
          <div className="yes">{`${helpful.yes} people found this review helpful`}</div>
          <div className="funny">{`${helpful.funny} people found this review funny`}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="ReviewList">
        {this.props.review.map((object, index) => this.formatReview(object, index))}
      </div>
    );
  }
}

export default Reviews;