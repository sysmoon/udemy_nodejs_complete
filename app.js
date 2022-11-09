const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// body analytics
app.use(bodyParser.urlencoded({ extended: false }));

// add router
app.use(adminRoutes);
app.use(shopRoutes);

// run server
app.listen(3000);
