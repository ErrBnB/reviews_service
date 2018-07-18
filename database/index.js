const mysql = require('mysql');
const mysqlConfig = require('./config.js');

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


// getOnePage(1, () => {console.log('SoMeThInG')})

module.exports = {
  getOnePage
};

