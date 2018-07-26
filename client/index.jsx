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
    };
    this.getReviews(this.state.currentGame);
  }

  getReviews(gameId) {
    fetch(`http://localhost:3001/api/game/:${gameId}/review`)
      .then(response => response.json())
      .then((data) => {
        this.setState({reviews: data});
        console.log(this.state.reviews);
      })
      .catch((err) => {
        console.log('Error in getReviews');
        console.log(err);
      });
  }

  render() {
    return (
      <Reviews review={this.state.reviews} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
