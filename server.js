const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, '/static')))

app.get('/', (req, res) => {
  const rstream = fs.createReadStream(path.join(__dirname, '/index.html'));
  rstream.pipe(res);
});

app.get('/auth.js', (req, res) => {
  let rstream = fs.createReadStream(path.join(__dirname, '/auth.js'));
  rstream.pipe(res);
});

app.get('/webpack-bundle.js', (req, res) => {
  let rstream = fs.createReadStream(path.join(__dirname, 'dev/webpack-bundle.js'));
  rstream.pipe(res);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});