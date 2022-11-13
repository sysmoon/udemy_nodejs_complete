const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// body analytics
app.use(bodyParser.urlencoded({ extended: false }));

// add router
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1> Page not Found </h1>");
});

// run server
app.listen(3000);
