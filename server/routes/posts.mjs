import express, { Router } from "express";
import BlogPost from "../models/BlogPost.mjs";

const BlogRoutes = express.Router();

BlogRoutes.post("/", async (req, res) => {
  console.log("AAAAA");
  try {
    const newBlogPost = new BlogPost({
      title: req.body.title,
      body: req.body.body,
      image: req.body.image,
      votes: req.body.votes,
    });
    const newBlogPostSave = await newBlogPost.save();
    res.status(200).send(newBlogPostSave);
  } catch (err) {
    res.status(500).json(error);
  }
});

export default BlogRoutes;
