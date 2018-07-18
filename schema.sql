
CREATE DATABASE IF NOT EXISTS reviews;

USE reviews;

CREATE TABLE IF NOT EXISTS user_reviews (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  date varchar(50) NOT NULL,
  review varchar(400) NOT NULL,
  accuracy int NOT NULL,
  communication int NOT NULL,
  cleanliness int NOT NULL,
  location int NOT NULL,
  checkin int NOT NULL,
  value int NOT NULL,
  PRIMARY KEY (id)
);

-- mysql -u root < schema.sql

-- mysql.server start


INSERT INTO user_reviews (name, date, review, accuracy, communication, cleanliness, location, checkin, value) VALUES \
("Moses", "March 2015", "This place has the exterior of a palace, and interior of a garbage truck", \
4, 5, 1, 4, 4, 3);



INSERT INTO user_reviews (name, date, review, accuracy, communication, cleanliness, location, checkin, value) VALUES \
("John", "August 2015", "If the Effiel Tower is a room, then this place is definitely not it.",
3, 4, 4, 3, 5, 4);


