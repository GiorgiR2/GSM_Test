const express = require("express");
const router = express.Router();

// router.get("/", async (req, res, next) => {
//   const { temp } = req.params;
//   console.log("get...", req.body);
//   return res.status(200).json({
//     title: "Express Testing",
//     message: `The app is working properly! ${temp}`,
//   });
// });

router.post("/:temp/:humidity", async (req, res, next) => {
  const { temp, humidity } = req.params;
  console.log("temp:", temp);
  console.log("humidity:", humidity);
  // console.log("temp...", Number(temp)+4);
  return res.status(200).json({
    title: "Express Testing",
    message: `The app is working properly! ${temp} ${humidity}`,
  });
});

module.exports = router;
