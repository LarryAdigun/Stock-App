const express = require('express');
const routes = require("./routes/stockRoutes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/liststocks")
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

app.use(routes);


app.listen(process.env.port || 4000, function() {
  console.log("now listening for request");
});
