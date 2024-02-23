const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  rank: String,
  name: String,
  batch: String,
  learning: Number,
});

const Leader = mongoose.model('leader', dataSchema);

module.exports = Leader;
