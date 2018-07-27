const mysql = require('mysql');
const faker = require('faker');
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


const fakeData = () => {
  let output = {};
  const month = ['January', 'Feb', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'];
  let dateGenerator = function(i) {
    let singleYear = 2010 + Math.floor(i / 12);
    let singleMonth = month[i % 12]
    return `${singleMonth} ${singleYear}`
  }
  const queryString = 'INSERT INTO user_reviews (name, date, review, accuracy, communication, cleanliness, location, checkin, value) VALUES ((?),(?),(?),(?),(?),(?),(?),(?),(?))'
  let outputString = [
    output.name, output.month, output.review, output.accuracy,
    output.communication, output.cleanliness, output.location, output.checkin,
    output.value,
  ];

  for (let i = 0; i < 2; i += 1) {
    output.name = faker.name.findName();
    output.month = dateGenerator(i);
    output.review = faker.lorem.paragraph();
    output.accuracy = Math.ceil(Math.random() * 1.5 + 3.5);
    output.communication = Math.ceil(Math.random() * 2.2 + 2.8);
    output.cleanliness = Math.ceil(Math.random() * 4 + 1);
    output.location = Math.ceil(Math.random() * 2 + 3);
    output.checkin = Math.ceil(Math.random() * 3 + 2);
    output.value = Math.ceil(Math.random() * 2.5 + 2.5);
    outputString = [
      output.name, output.month, output.review, output.accuracy,
      output.communication, output.cleanliness, output.location, output.checkin,
      output.value,
    ];
    connection.query(queryString, outputString);
  }
}

fakeData();
// getOnePage(1, () => {console.log('SoMeThInG')})

module.exports = {
  getAllPage,
};
