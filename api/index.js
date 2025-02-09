const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const UserModel = require("./models/User");

dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200,
  })
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const createdUser = await UserModel.create({ username, password });
  jwt.sign(
    { userId: createdUser._id },
    process.env.JWT_SECRET,
    {},
    (err, token) => {
      if (err) throw err;
      res.cookie("token", token).status(201).json("ok");
    }
  );
});

app.listen(4000);
