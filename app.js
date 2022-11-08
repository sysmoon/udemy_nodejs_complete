const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  // next();
});

app.use((req, res, next) => {
  console.log("in the middleware2");
});

const server = http.createServer(app);

app.listen(3000);
