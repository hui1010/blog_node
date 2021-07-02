const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema decides the structure of the documents (in mongodb), Model provides interfaces for it
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true })

//first argument - name of the model, it is important
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog