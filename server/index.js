const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const cors = require('cors');

const app = express();

app.use(express.static('client'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static('public'));

app.get('/api/game/:gameId/review', (req, res) => {
  db.getReviewInfo((err, data) => {
    if (err) throw err;
    console.log(data);
    res.json(data);
  }, req.params.gameId.replace(/[^0-9.]/g, ""));
});

app.get('/api/user/:userId', (req, res) => {
  db.getUserInfo((err, data) => {
    if (err) throw err;
    console.log(data);
    res.json(data);
  }, req.params.userId.replace(/[^0-9.]/g, ""));
});

app.listen(3001, () => {
  console.log('listening on port 3001');
});

// BELOW CODE IS TO POPULATE THE DATABASE WITH FAKE INFO (FILLS WITH ENTRIES)

const faker = require('faker');

const populate = () => {
  for (let i = 0; i < 1000; i += 1) {
    var ran = Math.floor(Math.random() * 20 + 1)
    var paragraph1 = '';
    for(var j = 0; j < ran; j++){
      paragraph1 += faker.lorem.paragraph();
    }
    ran = Math.floor(Math.random() * 20 + 1)
    var paragraph2 = '';
    for(var j = 0; j < ran; j++){
      paragraph2 += faker.lorem.paragraph();
    }

    db.insertInfo((err) => {
      if (err) throw err;
      console.log('successfully inserted data');
    }, {
      game: {
        gameName: faker.lorem.words(),
      },
      reviews: {
        game_id: Math.floor(Math.random() * 100 + 1),
        user_id: Math.floor(Math.random() * 100 + 1),
        review: paragraph1,
        reviewDatePosted: faker.date.past(),
        recommended: faker.random.boolean(),
        helpful: JSON.stringify({
          yes: faker.random.number(),
          no: faker.random.number(),
          funny: faker.random.number(),
          report: faker.random.number(),
        }),
      },
      users: {
        username: faker.internet.userName(),
        numberOfGames: Math.floor(Math.random() * 100 + 1),
        numberOfReviews: Math.floor(Math.random() * 100 + 1),
        userImage: faker.internet.avatar(),
      },
      comments: {
        review_id: Math.floor(Math.random() * 100 + 1),
        user_id: Math.floor(Math.random() * 100 + 1),
        comment: paragraph2,
        commentDatePosted: faker.date.past(),
      },
    });
  }
};

populate();
