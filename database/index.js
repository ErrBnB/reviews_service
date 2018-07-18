const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
connection.connect();

const getOnePage = function(params, callback) {
  

}






module.exports = {
  getOnePage
};

