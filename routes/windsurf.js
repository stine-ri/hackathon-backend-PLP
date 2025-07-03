const express = require("express");
const router = express.Router();
const { getWindsurfRecommendations } = require("../Controllers/windsurfController");

router.post("/recommend", getWindsurfRecommendations);

module.exports = router;