/*
  Defining the schema for each video object that we will store in the mongoDB database
*/

const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  publishedAt: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  thumbnails: { type: Object, required: true },
  channelId: { type: String, required: true },
  channelTitle: { type: String, required: true },
  liveBroadcastContent: { type: String, required: true },
  publishTime: { type: String, required: true },
});

// removing unnecessary properties and renaming '_id' to 'id' so that it is easy to use further

videoSchema.set("toJSON", {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject.__v;
    delete returnObject._id;
  },
});

module.exports = mongoose.model("Video", videoSchema);
