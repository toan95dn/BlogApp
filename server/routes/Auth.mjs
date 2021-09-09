import express from "express";
import passport from "passport";
import User from "../models/User.mjs";

const authRoutes = express.Router();

//Sign up
authRoutes.post("/signup", async (req, res) => {
  try {
    const user = new User({
      email: req.body.email,
    });
    const newUser = await User.register(user, req.body.password);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Sign in
authRoutes.post(
  "/signin",
  passport.authenticate("local", {
    successRedirect: "/suc",
    failureRedirect: "/error",
    passReqToCallback: true,
  }),
  (req, res) => {
    console.log(req.user);
    res.send("Hello success");
  }
);

//Sign out
authRoutes.get("/signout", (req, res) => {
  console.log("hi");
  req.logout();
  res.send("out");
});

export default authRoutes;
