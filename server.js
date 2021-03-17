//  import required modules

const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const cors = require("cors");

// create express app

const app = express();

// parse application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use CORS middleware
app.use(cors());

// config database

const dbConfig = require("./app/config/development.config");
const mongoose = require("mongoose");

// connect to the database

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.error("Not able to connect to the database");
    console.error(err);
  });

//    routes
app.use(require("./app/routes/router"));
//  Listen App

app.listen(PORT, () => {
  console.log("Server is connected on port " + PORT);
});
