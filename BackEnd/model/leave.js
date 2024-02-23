const mongoose = require('mongoose');

const LeaveSchema = new mongoose.Schema({
    leaveType: String,
    singleDate: String,
    fromDate: String,
    toDate: String,
    comment: String
});

const Leave = mongoose.model('Leave', LeaveSchema);

module.exports = Leave;
