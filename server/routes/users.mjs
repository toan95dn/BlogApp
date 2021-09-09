import express from "express";
import User from "../models/User.mjs";
import bcrypt from "bcrypt";

const usersRoute = express.Router();

//Update
usersRoute.put("/:id", async (req, res) => {
  if (res.body.userId === req.params.id) {
    if (res.body.password) {
      const salt = await bcrypt.genSalt();
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      res.status(200).json(updatedUser);
    } catch (error) {}
  } else {
    res.status(401).json("Cannot update this account");
  }
});

export default usersRoute;
