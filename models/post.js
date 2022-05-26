const mongoose = require("mongoose");

const likesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId },
});

const commentsSchema = mongoose.Schema(
  {
    username: String,
    comment: String,
    userId: { type: mongoose.Schema.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);

// A post has many likes, a like belongs to a POST
// A post has many comments, a comment belongs to a POST
const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // referencing a model
  photoUrl: String,
  name: String,
  description: String,
  likes: [likesSchema], // embedded schema
  comments: [commentsSchema], // embedded schema
});

module.exports = mongoose.model("Post", postSchema);
