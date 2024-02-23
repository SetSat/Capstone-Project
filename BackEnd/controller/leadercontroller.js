
const express = require('express');
const router = express.Router();
const Leader = require('../model/leadermodel');

router.get('/data', async (req, res) => {
    try {
        const data = await Leader.find();
        res.status(200).json(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
})
module.exports = router;

