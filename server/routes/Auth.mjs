import express from "express";
import passport from "passport";
import User from "../models/User.mjs";
import { validateSignup } from "../middleware.mjs";
import createUser from "../controllers/createUser.mjs";
import catchAsync from "../utils/catchAsync.mjs";

const authRoutes = express.Router();

//Sign up
authRoutes.post("/signup", validateSignup, catchAsync(createUser));

//Sign in
authRoutes.post(
  "/signin",
  passport.authenticate("local", {
    successRedirect: "/",
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
