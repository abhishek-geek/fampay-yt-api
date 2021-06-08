const { google } = require("googleapis");
const { YOUTUBE_TOKEN } = require("../utils/config");
console.log(YOUTUBE_TOKEN);

const getNewVideos = (after) => {
  google
    .youtube("v3")
    .search.list({
      key: YOUTUBE_TOKEN,
      part: "snippet",
      q: "vlog",
      publishedBefore: after,
      maxResults: 5,
    })
    .then((response) => {
      console.log("YEP....");
      const { data } = response;
      const details = data.items.map((item) => item.snippet);
      console.log(details[0].thumbnails);
    })
    .catch((err) => {
      console.log("shit...");
      console.error(err);
    });
};
getNewVideos("2021-06-04T15:50:55Z");

module.exports = getNewVideos;
