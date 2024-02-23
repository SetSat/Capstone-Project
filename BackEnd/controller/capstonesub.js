const express = require('express');
const router = express.Router();
const Capstone = require('../model/capstonesubmit')

router.post('/submit', async (req, res) => {
    try {
      const { frontEndSourceCode, backEndSourceCode, frontEndDeployedURL, backEndDeployedURL, comments } = req.body;
  
     
      const submission = new Capstone({
        frontEndSourceCode,
        backEndSourceCode,
        frontEndDeployedURL,
        backEndDeployedURL,
        comments
      });
  
      
      await submission.save();
  
      res.status(201).json({ message: 'Submission saved successfully' });
    } catch (error) {
      console.error('Error saving submission:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  module.exports = router;

  