const mysql = require('mysql');
const fs = require('fs');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
connection.connect();

const getAllPage = function (callback) {
  connection.query('SELECT * FROM user_reviews', (error, results) => {
    if (error) {
      console.log('DaTaBaSe connection error: ', error);
    } else {
      console.log('ReSuLtS from MySQL: ', results);
      callback(results);
    }
  })
}

let output;

fs.readFile('database/review.csv', 'utf8', (err, data) => {
  if (err) {
    console.log('ReAdFiLe error ', err);
  } else {
    output = JSON.parse(data);
    const queryString = 'INSERT INTO user_reviews (item, name, date, review, accuracy, communication, cleanliness, location, checkin, value) VALUES ((?),(?),(?),(?),(?),(?),(?),(?),(?),(?))'
  
    for (let i = 0; i < 2000; i += 1) {
      let outputString = [
        output[i].item, output[i].name, output[i].month, output[i].review, 
        output[i].accuracy, output[i].communication, output[i].cleanliness, output[i].location, 
        output[i].checkin, output[i].value
      ]
      connection.query(queryString, outputString);
    }
  }
});

module.exports = {
  getAllPage,
};
