const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("giorgi0...");
  console.log("giorgi1...");
  console.log("giorgi2...");
  console.log("giorgi3...");
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

module.exports = router;
