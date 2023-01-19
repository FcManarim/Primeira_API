import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const BookSchema = new Schema({
  name: {
    type: String,
    required: "Enter the book name:",
  },
  author: {
    type: String,
  },
  sinopse: {
    type: String,
  },
  idiom: {
    type: String,
  },
  isbn: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now(),
  }
});

export const UsuarioSchema = new Schema ({
  name: {
    type: String,
    required: "Enter the book name:",
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  } 
})