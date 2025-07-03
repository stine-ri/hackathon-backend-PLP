const QuizResult = require("../models/quizResult");

const submitQuiz = async (req, res) => {
  try {
    const { category, score, total } = req.body;
    const result = await QuizResult.create({
      userId: req.user.id,
      category,
      score,
      total,
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: "Failed to save quiz result." });
  }
};

const getUserResults = async (req, res) => {
  try {
    const results = await QuizResult.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch results." });
  }
};

module.exports = {
  submitQuiz,
  getUserResults,
};