const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGODB_URI, PORT } = require("./utils/config");
const cors = require("cors");

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

app.use(cors());
module.exports = app;
