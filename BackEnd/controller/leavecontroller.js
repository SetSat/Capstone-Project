const express = require('express');
const router = express.Router();
const Leave = require('../model/leave');

router.post('/submit', async (req, res) => {
    try {
      const { leaveType, singleDate, fromDate, toDate, comment } = req.body;
  
      const leave = new Leave({
        leaveType,
        singleDate,
        fromDate,
        toDate,
        comment
      });
  
      await leave.save();
  
      res.status(201).json({ message: 'Leave application saved successfully' });
    } catch (error) {
      console.error('Error saving leave application:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;
