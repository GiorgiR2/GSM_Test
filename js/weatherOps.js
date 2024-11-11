const mongoose = require("mongoose");

const WeatherModel = require("../models/weather.model");
const saveModel = require("../js/saveModel");

const saveWeather = (temp, humidity) => {
  const weather = new WeatherModel({
    _id: new mongoose.Types.ObjectId(),
    temp,
    humidity,
  });

  saveModel(weather);
};

module.exports = { saveWeather };
