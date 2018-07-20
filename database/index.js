const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const faker = require('faker');

const connection = mysql.createConnection(mysqlConfig);
connection.connect();

const getOnePage = function(params, callback) {
  connection.query('SELECT * FROM user_reviews WHERE (id <= 8)', params, function(error, results) {
    if (error) {
      console.log('DaTaBaSe connection error: ', error);
    } else {
      console.log('ReSuLtS from MySQL: ', results);
      callback(results);
    }
  })
}

// console.log('name: ', faker.name.findName());
// console.log('date: ', faker.date.month());
// console.log('review: ', faker.lorem.paragraph());
// console.log('value: ', Math.ceil(Math.random() * 5));

const fakeData = function() {
  let output = {};
  let month = ['January', 'Feb', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'];
  let dateGenerator = function(i) {
    let singleYear = 2010 + Math.floor(i / 12);
    let singleMonth = month[i % 12]
    return `${singleMonth} ${singleYear}`
  }
  const queryString = `INSERT INTO user_reviews (name, date, review, accuracy, communication,
    cleanliness, location, checkin, value) VALUES ((?),(?),(?),(?),(?),(?),(?),(?),(?))`
  const outputString = [
    output['name'], output['month'], output['review'], output['accuracy'],
    output['communication'], output['cleanliness'], output['location'], output['checkin'],
    output['value']
  ];
  for (let i = 0; i < 20; i++) {
    output['name'] = faker.name.findName();
    output['month'] = dateGenerator(i);
    output['review'] = faker.lorem.paragraph();
    output['accuracy'] = Math.ceil(Math.random() * 3 + 2);
    output['communication'] = Math.ceil(Math.random() * 3 + 2);
    output['cleanliness'] = Math.ceil(Math.random() * 3 + 2);
    output['location'] = Math.ceil(Math.random() * 3 + 2);
    output['checkin'] = Math.ceil(Math.random() * 3 + 2);
    output['value'] = Math.ceil(Math.random() * 3 + 2);
    connection.query(queryString, outputString);
  }
}

fakeData();
// getOnePage(1, () => {console.log('SoMeThInG')})

module.exports = {
  getOnePage
};

