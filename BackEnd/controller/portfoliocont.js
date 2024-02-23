const express = require("express");
const router = express.Router();
const Portfolio = require("../model/portfolio");


router.post("/submit", async (req, res) => {
    const { githubUrl, portfolioUrl, resumeUrl } = req.body;

    try {
        const submission = new Portfolio({ githubUrl, portfolioUrl, resumeUrl });
        await submission.save();
        res.status(201).json({ message: 'Submission successful' });
    } catch (error) {
        console.error('Failed to submit:', error);
        res.status(500).json({ message: 'Failed to submit', error: error.message });
    }
});
module.exports = router;
