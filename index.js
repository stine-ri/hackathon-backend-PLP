const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Fix: No trailing slash and handle preflight properly
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://hackathon-frontend-plp.vercel.app"
  ],
  credentials: true,
};

// ✅ Handle CORS + preflight (must come before any routes)
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // handle preflight requests

app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Mongo Connection Error:", err));

// ✅ Routes
app.use("/api/goals", require("./routes/goal"));
app.use("/api/resumes", require("./routes/resume"));
app.use("/api/ai", require("./routes/windsurf"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/quiz", require("./routes/quizRoutes"));

app.get("/", (req, res) => {
  res.send("SkillSync backend is working! 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
