const mongoose = require('mongoose');


const SubmissionSchema = new mongoose.Schema({
    frontEndSourceCode: String,
    backEndSourceCode: String,
    frontEndDeployedURL: String,
    backEndDeployedURL: String,
    comments: String
});


const Submission = mongoose.model('Submission', SubmissionSchema);

module.exports = Submission