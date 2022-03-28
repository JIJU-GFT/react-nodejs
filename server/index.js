const express = require('express');
const app = express();
const port = 8080;

app.post('/getConnection', (req, res) => {
  console.log('Here');
  res.redirect('/');
});

app.listen(port, () => {
  console.log('Server now listening in port', port);
});
