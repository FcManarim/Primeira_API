import mongoose from "mongoose";

const Schema = mongoose.Schema;

export BookSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the book name:'
    },
    author: {
        type: String,
        required: 'Enter the author name:'
    },
    sinopse: {
        type: String,
        required: 'Enter the sinopse of the book:'
    },
    idiom: {
        type: String,
        required: 'Enter the idiom:'
    },
    isbn: {
        type: Number,
        required: 'Enter ISBN:'
    },
    date: {
        type: Number,
        default : Date.now()
    },
})
