const mongoose = require("mongoose");

const WeatherModel = require("../models/weather.model");
const saveModel = require("../js/saveModel");

require("dotenv").config();

const url = process.env.MONGO_ADDRESS;

const saveWeather = (temp, humidity) => {
  const weather = new WeatherModel({
    _id: new mongoose.Types.ObjectId(),
    temp,
    humidity,
  });

  // saveModel(weather);
  console.log("save", temp, humidity);
  console.log("uri", url);
  weather.save();
};

module.exports = { saveWeather };
