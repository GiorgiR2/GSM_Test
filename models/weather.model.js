const mongoose = require("mongoose");

const WeatherSchema = new mongoose.Schema(
  {
    _id: String,
    temp: {
      type: Number,
      unique: false,
      required: [true, "Temperature Missing"],
    },
    humidity: {
      type: Number,
      unique: false,
      required: [true, "Humidity Missing"],
    },
  },
  {
    timestamps: true,
  }
);

const WeatherModel = mongoose.model("Weather", WeatherSchema);

module.exports = WeatherModel;
// export default WeatherModel;
