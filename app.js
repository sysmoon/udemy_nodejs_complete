const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("in the middleware2");
  res.send("it's sunny day!");
});

app.listen(3000);
