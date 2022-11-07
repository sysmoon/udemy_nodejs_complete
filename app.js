// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// app.use('/', (req, res, next) => {
//   console.log('This is always runs!.')
//   res.send('<h1> alwayas runs </h1>');
// });

app.use('/add-product', (req, res, next) => {
  console.log('Add Product!');
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
}) ;

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
