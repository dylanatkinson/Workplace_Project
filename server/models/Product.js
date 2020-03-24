const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    range: {
        type: String,
        required: true
    },
    seats: {
        type: Number,
        default: 1,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    colour: [
        {
            type: String
        }
    ],
    price: {
        type: Number,
        required: true
    },

});

module.exports = Product = mongoose.model('product', ProductSchema);