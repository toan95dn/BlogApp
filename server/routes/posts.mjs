import express, { Router } from "express";
import BlogPost from "../models/BlogPost.mjs";
import createBlogPost from "../controllers/createPost.mjs";
import { validatePost } from "../middleware.mjs";

const BlogRoutes = express.Router();

BlogRoutes.post("/write", validatePost, createBlogPost);

export default BlogRoutes;
