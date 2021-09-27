import BlogPost from "../models/BlogPost.mjs";
import User from "../models/User.mjs";

export default async function createBlogPost(req, res) {
  try {
    // const {_id} = {req.user}
    console.log("USER IS", req.user.id);

    const user = await User.findById(req.user.id);
    console.log("User find by id", user);

    const newBlogPost = new BlogPost({
      title: req.body.title,
      body: req.body.body,
      author: user,
    });

    const newBlogPostSave = await newBlogPost.save();
    console.log("Good");
    res.status(200).send(newBlogPostSave);
  } catch (err) {
    console.log(err);
    res.status(500).json(error);
  }
}
