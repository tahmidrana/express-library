const mongoose = require('mongoose')

var BookSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    },
    genre: {
        type: String,
        trim: true
    },
    tags: {
        type: [String]
    },
    store_qty: {
        type: Number,
        required: true
    }
})

var Book = mongoose.model('Book', BookSchema)
module.exports = Book