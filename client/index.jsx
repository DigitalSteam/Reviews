import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './reviews.jsx';
import OverallReviews from './overallReviews.jsx';
// import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGame: 5, // default
      reviews: [],
      recentReviews: [],
      users: [],
      overallReviews: 0,
    };
    this.getReviews(this.state.currentGame);
  }

  getUsers(userId, index) {
    fetch(`/api/user/:${userId}`)
      .then(response => response.json())
      .then((data) => {
        const user = this.state.users;
        user[index] = data[0];
        this.setState({ users: user });
      })
      .catch((err) => {
        console.log('Error in getUsers');
        console.log(err);
      });
  }

  getReviews(gameId) {
    fetch(`/api/game/:${gameId}/review`)
      .then(response => response.json())
      .then((data) => {
        this.setState({reviews: data});
        this.state.overallReviews = 0
        this.state.reviews.forEach((review, index) => {
          if (review.recommended) {
            this.state.overallReviews += 1;
          }
          this.getUsers(review.user_id, index);
        });
      })
      .catch((err) => {
        console.log('Error in getReviews');
        console.log(err);
      });
  }

  handleHelpfulClick(event) {
    const currentButton = event.target.getAttribute('name');
    if (currentButton === 'funny') {
      alert(`Your account does not have sufficient privileges to use the ${currentButton} button`);
    } else {
      alert(`You must be logged in in order to use the ${currentButton} button`);
    }
  }

  handleChangeGame(event) {
    const game = prompt('Please Enter A Game ID');
    this.state.currentGame = game;
    this.getReviews(this.state.currentGame);
  }

  select(event){
    var sortBy = event.target.value || 'recent';
    if(sortBy === 'helpful'){
      this.setState({reviews: this.state.reviews.sort((a, b) => {
        a = JSON.parse(a.helpful);
        b = JSON.parse(b.helpful);
        return b.yes - a.yes;
      }),
      });
    } else if(sortBy === 'positive'){
      this.setState({reviews: this.state.reviews.sort((a, b) => {
        return b.recommended - a.recommended;
      }),
      });
    } else if(sortBy === 'negative'){
      this.setState({reviews: this.state.reviews.sort((a, b) => {
        return a.recommended - b.recommended;
      }),
      });
    } else if(sortBy === 'recent'){
      this.setState({reviews: this.state.reviews.sort((a, b) => {
        return new Date(b.reviewDatePosted).getTime() - new Date(a.reviewDatePosted).getTime();
      }),
      });
    } else if(sortBy === 'oldest'){
      this.setState({reviews: this.state.reviews.sort((a, b) => {
        return new Date(a.reviewDatePosted).getTime() - new Date(b.reviewDatePosted).getTime();
      }),
      });
    }

    console.log(this.state.reviews)

    this.state.reviews.forEach((review, index) => {
          this.getUsers(review.user_id, index);
    })
  }

  render() {
    return (
      <div className="reviewFormatBody">
        <div className="reviewBody">
        <div className="reviewTopBar">
          <div className="reviewsListTitle">Customer Reviews</div>
          <div className="reviewLogin" onClick={this.handleChangeGame.bind(this)}>Change Game</div>
        </div>
        <OverallReviews reviews={this.state.reviews} overallReviews={this.state.overallReviews}/>
        <div className="selectReviewSort">
          <select className="reviewsSelectSort" onChange={this.select.bind(this)}>
            <option value="null">Filter Type</option>
            <option value="helpful">Helpful</option>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
            <option value="recent">Recent</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        <Reviews review={this.state.reviews} users={this.state.users} helpfulClick={this.handleHelpfulClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reviews'));
