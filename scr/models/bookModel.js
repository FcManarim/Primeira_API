import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const BookSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the book name:'
    },
    author: {
        type: String,
        // required: 'Enter the author name:'
    },
    sinopse: {
        type: String,
        // required: 'Enter the sinopse of the book:'
    },
    idiom: {
        type: String,
        // required: 'Enter the idiom:'
    },
    isbn: {
        type: String,
        // required: 'Enter ISBN:'
    },
    image: {
        type: String
    },
    nova_coluna: {
        type: String
    },
    date: {
        type: Date,
        default : Date.now()
    }
  
});