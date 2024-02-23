
const mongoose = require("mongoose");

const QuerySchema = new mongoose.Schema({
  topic: String,
  language: String,
  title: String,
  description: String,
  fromTime: String,
  toTime: String,
});

const Query = mongoose.model("Query", QuerySchema);

module.exports = Query;
