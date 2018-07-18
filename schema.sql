DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE user_reviews (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  date varchar(50) NOT NULL,
  review varchar(400) NOT NULL,
  PRIMARY KEY (id)
);

-- mysql -u root < schema.sql

-- mysql.server start