const express = require("express");
const { submitQuiz, getUserResults } = require("../Controllers/quizController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/submit", verifyToken, submitQuiz);
router.get("/my-results", verifyToken, getUserResults);

module.exports = router;