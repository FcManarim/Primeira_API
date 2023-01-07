import mongoose from "mongoose";
import { BookSchema } from "../models/bookModel";

const Book = mongoose.model("Book", BookSchema);

export const addNewBook = (req, res) => {
  let newBook = new Book(req.body);

  newBook.save((err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
};

export const getBooks = (req, res) => {
  // {} vai buscar tudo que tem no banco, não especificou um ID
  Book.find({}, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
};

export const getBookId = (req, res) => {
  Book.findById(req.params.bookId, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
};
