const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("this is alwqays run!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1> Add Product </h1>");
});

app.use("/", (req, res, next) => {
  console.log("in the middleware");
  res.send("<h1> Hello Express </h1>");
});

app.listen(3000);
