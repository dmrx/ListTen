const express = require('express');
const app = express();
// const db = require('./server/db/games');
const fs = require('fs');
const path = require('path');

app.use('/static', express.static(path.join(__dirname, '/static')))

// app.use(express.static(__dirname));
// app.use(bodyparser.json());

app.get('/', (req, res) => {
  const rstream = fs.createReadStream(path.join(__dirname, '/index.html'));
  rstream.pipe(res);
});

app.get('/auth.js', (req, res) => {
  let rstream = fs.createReadStream(path.join(__dirname, '/auth.js'));
  rstream.pipe(res);
});

app.get('/webpack-bundle.js', (req, res) => {
  let rstream = fs.createReadStream(path.join(__dirname, '/webpack-bundle.js'));
  rstream.pipe(res);
});

app.get('/styles.css', (req, res) => {
  let rstream = fs.createReadStream(path.join(__dirname, '/styles.css'));
  rstream.pipe(res);
});

// app.post('/lists', (req, res) => {
//   if (!req.body.winner) res.status(500).json({ error: 'Must send winner.' });
//   const game = db.create({
//     winner: req.body.winner,
//   });
//   res.json(game);
// });

// app.get('/lists', (req, res) => {
//   res.json(db.find());
// });

const port = 3000;

app.listen(port);
