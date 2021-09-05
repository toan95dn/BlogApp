import express from "express";
import passport from "passport";
import User from "../models/User.mjs";

const authRoutes = express.Router();

//Sign up
authRoutes.post("/signup", async (req, res) => {
  console.log("Body is", req.body);
  try {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
    });

    console.log(req.body.email);
    const user = await newUser.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default authRoutes;
