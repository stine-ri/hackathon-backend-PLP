const Goal = require("../models/goal");

exports.addGoal = async (req, res) => {
  try {
    const { goalText } = req.body;
    const newGoal = new Goal({ goalText });
    await newGoal.save();
    res.status(201).json(newGoal);
  } catch (error) {
    res.status(500).json({ error: "Failed to save goal" });
  }
};

exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find().sort({ createdAt: -1 });
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch goals" });
  }
};