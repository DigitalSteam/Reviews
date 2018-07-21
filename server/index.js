const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static('public'));

app.listen(3001, () => {
  console.log('listening on port 3001');
});
