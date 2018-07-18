const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.get('/api/reviews/1', (req, res) => {
  db.getOnePage(1, (results) => {
    res.send(results)
  })
})



app.listen(PORT, () => {
console.log(`listening on port ${PORT}`);
});


