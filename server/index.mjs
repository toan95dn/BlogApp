import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.mjs";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(3001);
    console.log("successssss");
  })
  .catch((err) => console.log(err));

app.use("/server/auth", authRoutes);

app.use("/", (req, res) => {
  console.log("hey, this is the main url");
  res.send("Hello world");
});
