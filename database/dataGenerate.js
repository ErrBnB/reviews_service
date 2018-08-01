const fs = require('fs');
const faker = require('faker');

let dataSet = [];
let output = {};
const month = ['January', 'Feb', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];
const dateGenerator = (i) => {
  let singleYear = 2010 + Math.floor(i / 12);
  let singleMonth = month[i % 12]
  return `${singleMonth} ${singleYear}`
}
// const queryString = 'INSERT INTO user_reviews (name, date, review, accuracy, communication, cleanliness, location, checkin, value) VALUES ((?),(?),(?),(?),(?),(?),(?),(?),(?))'
// let outputString = [
// 		output.name, output.month, output.review, output.accuracy,
// 		output.communication, output.cleanliness, output.location, output.checkin,
// 		output.value,
// ];

for (let i = 0; i < 20000; i += 1) {
	dataSet[i] = {};
	dataSet[i].item = Math.ceil(Math.random() * 100);
	dataSet[i].name = faker.name.findName();
	dataSet[i].month = dateGenerator(i);
	dataSet[i].review = faker.lorem.paragraph();
	dataSet[i].accuracy = Math.ceil(Math.random() * 1.5 + 3.5);
	dataSet[i].communication = Math.ceil(Math.random() * 2.2 + 2.8);
	dataSet[i].cleanliness = Math.ceil(Math.random() * 4 + 1);
	dataSet[i].location = Math.ceil(Math.random() * 2 + 3);
	dataSet[i].checkin = Math.ceil(Math.random() * 3 + 2);
	dataSet[i].value = Math.ceil(Math.random() * 2.5 + 2.5);
}

fs.writeFile('database/review.csv', JSON.stringify(dataSet), 'utf8', (err) => {
  console.log('WrItEfIlE error ', err);
});