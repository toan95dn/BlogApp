import express from "express";
import passport from "passport";
import User from "../models/User.mjs";
import bcrypt from "bcrypt";

const authRoutes = express.Router();

//Sign up
authRoutes.post("/signup", async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
    });

    console.log(req.body.email);
    const user = await newUser.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Sign in
authRoutes.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    !user && res.status(400).json("Wrong credential");

    console.log(user);

    const validate = await bcrypt.compare(req.body.password, user.password);

    !validate && res.status(400).json("Wrong credential");

    res.status(200).json("Log in success!");
  } catch (error) {}
});

//Update
authRoutes.put("/:id", async (req, res) => {});

export default authRoutes;
