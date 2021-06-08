const app = require("./app");
const { PORT } = require("./utils/config");
const getNewVideos = require("./services/search");
const axios = require("axios");

// this variable will store the latest date untill when we have stored data in the database
// it will be used to get the data after this data and time
// initialised by arbitrary date

let latestDate = "2021-06-01T00:00:01Z";

// this function will take time in seconds as input and fetch the latest videos after every interval

const loadNewVideosIn = async (time) => {
  setInterval(async () => {
    const videos = await getNewVideos(latestDate);
    const responce = await axios.post("http://localhost:3003/api/videos/all", {
      videos,
    });
    latestDate = responce.data.latestDate;
    console.log(latestDate);
  }, time * 1000);
};

// calling the function to fetch and store videos every 10 seconds

// loadNewVideosIn(10);

// calling the express app

app.listen(PORT, () => {
  console.log(`connecting to port ${PORT}...`);
});
