/*
 * This is the express app that handle all the routes
 */

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { MONGODB_URI, PORT } = require("./utils/config");
const videosRouter = require("./routes/videos");

// connecting to the MongoDB server

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log(`connected to mongodb on port ${PORT}`);
  }
);

// calling cors middleware so that cross origin requesr can be fetched without error

app.use(cors());

// parsing the json data in the request to JavaScript object

app.use(express.json());

/*
Routing to the video route where the functionality of searching videos, 
saving all videos and get is defined
*/

app.use("/api/videos", videosRouter);

module.exports = app;
