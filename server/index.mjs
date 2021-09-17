import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.mjs";
import morgan from "morgan";
import passport from "passport";
import LocalStrategy from "passport-local";
import User from "./models/User.mjs";
import BlogPost from "./models/BlogPost.mjs";
import BlogRoutes from "./routes/posts.mjs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

dotenv.config();

//Passport config
app.use(passport.initialize());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Error handling
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(3000);
    console.log("successssss");
  })
  .catch((err) => console.log(err));

//User auth
app.use("/server/auth", authRoutes);

//Blog post
app.use("/server/posts", BlogRoutes);

//Testing

app.use("/error", (req, res) => {
  res.send("error");
});

app.use("/suc", (req, res) => {
  res.send("suc");
});

app.use("/", (req, res) => {
  console.log("hey, this is the main url");
  res.send("Hello world");
});
