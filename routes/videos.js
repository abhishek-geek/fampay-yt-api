const videosRouter = require("express").Router();
const Video = require("../model/video");
// require("express-async-errors");

videosRouter.get("/", async (request, response) => {
  console.log("Geting.....");

  // extracting query parameters of page no (page) and no of items (limit)
  const page = Number(request.query.page);
  const limit = Number(request.query.limit);

  // geting sorted video data of requires page no and limit items in an array (videos)
  const videos = await Video.find({})
    .sort({ publishedAt: "desc" })
    .skip(page)
    .limit(limit);
  // console.log(videos);
  response.status(200).json({ videos });
});

videosRouter.get("/search", async (request, response) => {
  console.log("Searching...");

  // extracting search query
  const q = request.query.q;

  // getting all videos
  const videos = await Video.find({});

  //filtering videos based on title or description
  const filteredVideos = videos.filter((video) => {
    if (video.title.includes(q) || video.description.includes(q)) {
      return video;
    }
  });

  // return filtered videos
  response.status(200).json(filteredVideos);
});

videosRouter.post("/all", async (request, response) => {
  console.log("Posting All....");

  // extracting aray of videos that has to store in the database
  const videos = request.body.videos;

  // makling array of Video object that has to store in DB
  const videoObjects = videos.map((video) => new Video(video));

  // making promise array of each video that we have to store
  const promiseArray = videoObjects.map((video) => video.save());

  // executing all the promises and geting saved Video list
  const savedVideos = await Promise.all(promiseArray);

  // geting the date and time of the latest video that is saved
  // so that we do not save the same video again and again
  savedVideos.sort((a, b) => {
    const dateA = new Date(a.publishedAt);
    const dateB = new Date(b.publishedAt);
    return dateB - dateA;
  });

  response.status(201).json({ latestDate: savedVideos[0].publishedAt });
});

module.exports = videosRouter;
