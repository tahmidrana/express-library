const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BookIssueSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    issue_date: {
        type: Date,
        default: Date.now,
        required: true
    },
    return_date: {
        type: Date
    }
});

var BookIssue = mongoose.model('BookIssue', BookIssueSchema);
module.exports = BookIssue;