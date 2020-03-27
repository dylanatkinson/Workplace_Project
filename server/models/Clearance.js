const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClearanceSchema = new Schema({
    range: {
        type: String,
        required: true
    }
});

// need to specify the collection name explicitly here, else it doesn't work
module.exports = Clearance = mongoose.model('clearance', ClearanceSchema, 'clearance');