require("dotenv").config();

const PORT = process.env.PORT || 3000;

const MONGODB_URI =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;

const YOUTUBE_TOKEN = process.env.YOUTUBE_TOKEN;

module.exports = {
  MONGODB_URI,
  PORT,
  YOUTUBE_TOKEN,
};
