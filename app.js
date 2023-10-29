const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();

// 모든 접근을 허용한다
app.use(cors());

mongoose
  .connect(process.env.DB, {
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"));

module.exports = app;
