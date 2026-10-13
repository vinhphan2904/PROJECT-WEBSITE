const getData = require("../service/CRUDservice");
const { json } = require("express");

const getQuestion = async (req, res) => {
  try {
    let result = await getData(req.body);
    return res.json(result);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getQuestion;