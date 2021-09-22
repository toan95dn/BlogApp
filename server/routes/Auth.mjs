import express from "express";
import passport from "passport";
import User from "../models/User.mjs";
import { validateSignup, validateSignin } from "../middleware.mjs";
import createUser from "../controllers/createUser.mjs";
import catchAsync from "../utils/catchAsync.mjs";

const authRoutes = express.Router();

//Sign up
authRoutes.post("/signup", validateSignup, catchAsync(createUser));

//Sign in
authRoutes.post(
  "/signin",
  passport.authenticate("local", {
    failureRedirect: "/errorlogin",
    successRedirect: "/suclogin",
  })
);

//Sign out
authRoutes.get("/signout", (req, res) => {
  req.logout();
  res.send("out");
});

authRoutes.get("/islogin", (req, res) => {
  // if (req.user) {
  //   console.log(req.user);
  //   res.send(req.user);
  // } else {
  //   res.send("Null");
  // }
  console.log(req.user);
  console.log(req.isAuthenticated());
  res.send(req.isAuthenticated());
});

export default authRoutes;
