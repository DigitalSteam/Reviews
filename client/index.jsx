import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './reviews.jsx';
// import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGame: 1,
      reviews: [],
      users: [],
    };
    this.getReviews(this.state.currentGame);
  }

  getUsers(userId, index) {
    fetch(`http://localhost:3001/api/user/:${userId}`)
      .then(response => response.json())
      .then((data) => {
          const user = this.state.users;
          user[index] = data[0];
          this.setState({users:user});
      })
      .catch((err) => {
        console.log('Error in getUsers');
        console.log(err);
      });
  }

  getReviews(gameId) {
    fetch(`http://localhost:3001/api/game/:${gameId}/review`)
      .then(response => response.json())
      .then((data) => {
        this.setState({reviews: data});
        this.state.reviews.forEach((review, index) => {
          this.getUsers(review.user_id, index);
        });
      })
      .catch((err) => {
        console.log('Error in getReviews');
        console.log(err);
      });
  }

  render() {
    return (
      <Reviews review={this.state.reviews} users={this.state.users}/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
