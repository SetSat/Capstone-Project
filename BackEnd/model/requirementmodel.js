const mongoose = require('mongoose');

const requirementSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  companyWebsite: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  natureOfJob: {
    type: String,
    required: true
  },
  deadline: {
    type: String,
    required: true
  },
  ctc: {
    type: Number,
    required: true
  },
  openings: {
    type: Number,
    required: true
  },
  program: {
    type: String,
    required: true
  }
});

const Requirement = mongoose.model('requirment', requirementSchema);

module.exports = Requirement;
