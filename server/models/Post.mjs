import mongoose from "mongoose";
import { Schema } from "mongoose";

const blogSchema = new Schema({
  title: String,
  authorEmail: String,
  body: Object,
  comments: [{ author: String, body: String, date: Date }],
  date: { type: Date, default: Date.now },
  votes: Number,
});
