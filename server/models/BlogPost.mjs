import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  body: { type: Object, required: true },

  image: { type: String },

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],

  date: { type: Date, default: Date.now },

  votes: Number,
});

const BlogPost = mongoose.model("BlogPost", blogSchema);

export default BlogPost;
