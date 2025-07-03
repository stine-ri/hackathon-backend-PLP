const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const corsOptions = {
  origin: [
    'http://localhost:5173', // or your local port if using Vite
    'https://your-vercel-app.vercel.app'
  ],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

// Mongo connection
// Updated Mongo connection without deprecated options
mongoose.connect(process.env.MONGO_URI, {
  
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => {
  console.log("❌ Mongo Connection Error:", err);
});


// Routes
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