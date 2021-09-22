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
import session from "express-session";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

dotenv.config();

app.use(
  session({ secret: "not a good one", resave: true, saveUninitialized: true })
);
//Passport config
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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
app.use("/auth", authRoutes);

//Blog post
app.use("/posts", BlogRoutes);

//Testing

app.use("/error", (req, res) => {
  console.log("ERRRRRRRRR");
  res.send("error");
});

//Login error / success

app.use("/errorlogin", (req, res) => {
  res.status(500).json({ message: "Invalid email or password." });
});

app.use("/suclogin", (req, res) => {
  console.log(req.isAuthenticated());
  console.log("SUCCCCCCC");
  console.log(req.user);
  res.send("suc");
});

//Posting a blog

//

app.use("/suc", (req, res) => {
  console.log("SUCCCCCCC");

  res.send("suc");
});

app.use("/", (req, res) => {
  console.log("hey, this is the main url");
  res.send("Hello world");
});

//Error handling
app.use(function (err, req, res, next) {
  console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
  console.error("Message from backend: ", err.message);
  res
    .status(err.statusCode ? err.statusCode : 500)
    .json({ message: err.message });
});
