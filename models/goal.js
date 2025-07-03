const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  goalText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Goal", goalSchema);