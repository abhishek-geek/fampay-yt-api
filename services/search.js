const { google } = require("googleapis");
const { YOUTUBE_TOKEN } = require("../utils/config");

// Trying different API keys
const tokenArray = YOUTUBE_TOKEN.split(",");

let currentTokenIndex = 0;

// this function will return new videos ater the provided date and time (after)
// with the search query "vlog"
const getNewVideos = async (after) => {
  console.log("currentToken", tokenArray[currentTokenIndex]);

  try {
    const response = await google.youtube("v3").search.list({
      key: tokenArray[currentTokenIndex],
      part: "snippet",
      q: "vlog",
      publishedAfter: after,
      maxResults: 1,
    });
    console.log("in line 22");
    console.log("response from yt : ", response);
    console.log("YEP....");
    const { data } = response;
    const details = data.items.map((item) => item.snippet);
    console.log("details : ", details);
    return details;
  } catch (err) {
    console.error(err);
    currentTokenIndex = currentTokenIndex + 1;
    getNewVideos(after);
  }
  // const response = await google.youtube("v3").search.list({
  //   key: YOUTUBE_TOKEN,
  //   part: "snippet",
  //   q: "vlog",
  //   publishedAfter: after,
  //   // maxResults: 5,
  // });

  // console.log("YEP....");
  // const { data } = response;
  // const details = data.items.map((item) => item.snippet);
  // console.log(details);
  // return details;
};

// getNewVideos("2021-06-04T15:50:55Z");

module.exports = getNewVideos;
