import express, { Router } from "express";
import BlogPost from "../models/BlogPost.mjs";
import createBlogPost from "../controllers/createPost.mjs";

const BlogRoutes = express.Router();

BlogRoutes.post("/write", createBlogPost);

export default BlogRoutes;
