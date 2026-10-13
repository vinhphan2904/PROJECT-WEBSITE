const express = require("express");
const { run } = require("node:test");
const getQuestion = require("../controllers/Servercontroller");
const route = express.Router();

route.post("/", getQuestion);

route.get("/", (req, res) => {
  res.send("Server is running!");
});
module.exports = route;