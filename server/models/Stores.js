const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoresSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

// need to specify the collection name explicitly here, else it doesn't work
module.exports = Stores = mongoose.model('stores', StoresSchema, 'stores');