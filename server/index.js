const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const fs = require('fs');

const port = 8080;

app.use(bodyParser.urlencoded({ extended: 'false' }));
app.use(bodyParser.json());

app.post('/getConnection', (req, res) => {
  res.send({
    body: req.body,
  });
});

app.listen(port, () => {
  console.log('Server now listening in port', port);
});
