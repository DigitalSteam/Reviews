DROP DATABASE IF EXISTS steam_review;
CREATE DATABASE steam_review;
USE steam_review;

CREATE TABLE Games (
  id int NOT NULL AUTO_INCREMENT,
  gameName varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Reviews (
  id int NOT NULL AUTO_INCREMENT,
  game_id int NOT NULL,
  user_id int NOT NULL,
  review varchar(5000) NOT NULL,
  reviewDatePosted varchar(25) NOT NULL,
  recommended boolean NOT NULL,
  helpful varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  numberOfGames int NOT NULL,
  NumberOfReviews int NOT NULL,
  userImage varchar(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Comments (
  id int NOT NULL AUTO_INCREMENT,
  review_id int NOT NULL,
  user_id int NOT NULL,
  comment varchar(5000) NOT NULL,
  commentDatePosted varchar(25) NOT NULL,
  PRIMARY KEY (id)
);