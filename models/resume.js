const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  skills: [String],
  experience: String,
  education: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Resume", resumeSchema);