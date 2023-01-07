import {
  addNewBook,
  getBooks,
  getBookId,
  updateBook,
  removeBook,
} from "../controllers/bookController";

const routes = (app) => {
  app
    .route("/book")

    .get((req, res, next) => {
      //exemplo de interação com midleware retirado do código original(visivel no terminal)
      console.log(`URL from: ${req.originalUrl}`);
      console.log(`Type: ${req.method}`);
      next();
    }, getBooks)

    .post(addNewBook);

  app.route("/book/:bookId")
  .get(getBookId)
  .put(updateBook)
  .delete(removeBook);
};

export default routes;
