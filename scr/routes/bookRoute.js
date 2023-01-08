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
      console.log(`URL from: ${req.originalUrl}`); //exemplo de interação com midleware
      console.log(`Type: ${req.method}`);         // retirado do código original(visivel no terminal)
      next();
    }, getBooks)
    .post(addNewBook);

  app
  .route("/book/:bookId")
  .get(getBookId)
  .put(updateBook)
  .delete(removeBook);
};
export default routes;
