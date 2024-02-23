
const express = require("express");
const router = express.Router();
const Query = require("../model/querymode");

router.post("/submit", async (req, res) => {
  try {
    const { topic, language, title, description, fromTime, toTime } = req.body;
    const query = new Query({
      topic,
      language,
      title,
      description,
      fromTime,
      toTime,
    });
    await query.save();
    res.status(201).json({ message: "Query submitted successfully" });
  } catch (error) {
    console.error("Error submitting query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
