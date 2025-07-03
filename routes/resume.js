const express = require("express");
const router = express.Router();
const { createResume, getAllResumes } = require("../Controllers/resumeController");

router.post("/", createResume);
router.get("/", getAllResumes);

module.exports = router;