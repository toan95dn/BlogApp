import BlogPost from "../models/BlogPost.mjs";

export default async function createBlogPost(req, res) {
  console.log(req.body.body);
  try {
    const newBlogPost = new BlogPost({
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
    });
    const newBlogPostSave = await newBlogPost.save();
    console.log("Good");
    res.status(200).send(newBlogPostSave);
  } catch (err) {
    console.log(err);
    res.status(500).json(error);
  }
}
