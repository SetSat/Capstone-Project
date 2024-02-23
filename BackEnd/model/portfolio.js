const mongoose = require('mongoose');

const Portfolioschema = new mongoose.Schema({
  githubUrl: { type: String, required: true },
  portfolioUrl: { type: String, required: true },
  resumeUrl: { type: String, required: true }
});

module.exports = mongoose.model('portfolio  ', Portfolioschema);
