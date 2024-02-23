const express = require('express');
const router = express.Router();
const Requirement = require('../model/requirementmodel.js')

router.get('/requirements', async (req, res) => {
    try {

        const requirements = await Requirement.find();
        res.status(200).json(requirements);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Requirement data not fetched' });
    }
});
module.exports = router;
