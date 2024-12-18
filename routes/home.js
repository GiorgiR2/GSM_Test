const express = require("express");
const router = express.Router();

const { saveWeather } = require("../js/weatherOps");

router.route("/home/:temp/:humidity").get((req, res) => {
  const { temp, humidity } = req.params;

  saveWeather(temp, humidity);

  console.log("get request", temp, humidity);

  return res.status(200).json({
    title: "Express Testing",
    message: `The app is working properly! ${temp} ${humidity}`,
  });
});

router.route("/home").post((req, res) => {
  const { temp, humidity } = req.query;

  saveWeather(temp, humidity);

  console.log("post request", temp, humidity);

  return res.status(200).json({
    title: "Express Testing",
    message: `The app is working properly! ${temp} ${humidity}`,
  });
});

module.exports = router;
