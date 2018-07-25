import React from 'react';
import ReactDOM from 'react-dom';
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
    this.state.currentGame = 1;
    fetch(`http://localhost:3001/api/game/:${gameId}/review`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log('Error in getReviews');
        console.log(err);
      });
  }

  render() {
    return (
      <div id="review"></div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
