const Post = require("../models/post");
const User = require("../models/user");
const S3 = require("aws-sdk/clients/s3");
const { v4: uuidv4 } = require("uuid");

const s3 = new S3();

module.exports = {
  create,
  index,
  postDetails,
  deletePost,
};

function create(req, res) {
  try {
    const filePath = `${uuidv4()}/${req.file.originalname}`;
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: filePath,
      Body: req.file.buffer,
    };
    s3.upload(params, async function (err, data) {
      const post = await Post.create({
        description: req.body.description,
        name: req.body.name,
        user: req.user,
        photoUrl: data.Location,
      });
      // make sure the post we're sending back has the user populated
      await post.populate("user");

      res.status(201).json({ post: post });
    });
  } catch (err) {
    res.json({ data: err });
  }
}

async function index(req, res) {
  try {
    // this populates the user when you find the posts
    // so you'll have access to the users information
    // when you fetch teh posts
    const posts = await Post.find({}).populate("user").exec();
    res.status(200).json({ posts });
  } catch (err) {}
}

async function postDetails(req, res) {
  try {
    // First find the user using the params from the request
    // findOne finds first match, its useful to have unique usernames!
    const post = await Post.findOne({ _id: req.params.id });
    // Then find all the posts that belong to that user
    if (!post) return res.status(404).json({ err: "Post not found" });

    res.status(200).json({ post: post });
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function deletePost(req, res) {
  try {
    await Post.deleteOne({ _id: req.params.id }); // mutating a document
    // no need to save since its not excistent
    res.json({ data: "like removed" });
  } catch (err) {
    res.status(400).json({ err });
  }
}
