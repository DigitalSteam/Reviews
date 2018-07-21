const mysql = require('mysql');

const server = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'steam_review',
});

const insertInfo = (callback, insert) => {
  server.query(`INSERT into Games (gameName) VALUES ('${insert.game.gameName}')`, (err, result) => {
    if (err) callback(err);
    callback(null, result);
  });
  server.query(`INSERT into Reviews (game_id, user_id, review, reviewDatePosted, recommended, helpful) VALUES (${insert.reviews.game_id}, ${insert.reviews.user_id}, '${insert.reviews.review}', '${insert.reviews.reviewDatePosted}', ${insert.reviews.recommended}, '${insert.reviews.helpful}')`, (err, result) => {
    if (err) callback(err);
    callback(null, result);
  });
  server.query(`INSERT into Users (username, numberOfGames, numberOfReviews, userImage) VALUES ('${insert.users.username}', ${insert.users.numberOfGames}, ${insert.users.numberOfReviews}, '${insert.users.userImage}')`, (err, result) => {
    if (err) callback(err);
    callback(null, result);
  });
  server.query(`INSERT into Comments (review_id, user_id, comment, commentDatePosted) VALUES (${insert.comments.review_id},${insert.comments.user_id},'${insert.comments.comment}','${insert.comments.commentDatePosted}')`, (err, result) => {
    if (err) callback(err);
    callback(null, result);
  });
};

module.exports = {
  insertInfo,
};