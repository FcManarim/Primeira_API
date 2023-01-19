import {
  addNewBook,
  getBooks,
  getBookId,
  updateBook,
  removeBook,
} from "../controllers/bookController";

import {
  addNewUser,
  getUsers,
  getUserId,
  updateUser,
  removeUser,
} from "../controllers/usuarioController";

const routes = (app) => {
  app
    .route("/book")
    .get((req, res, next) => {
      console.log(`URL from: ${req.originalUrl}`); //exemplo de interação com midleware
      console.log(`Type: ${req.method}`); // retirado do código original(visivel no terminal)
      next();
    }, getBooks)
    .post(addNewBook);

  app.route("/book/:bookId").get(getBookId).put(updateBook).delete(removeBook);

  app
    .route("/user")
    .get((req, res, next) => {
      console.log(`URL from: ${req.originalUrl}`); //exemplo de interação com midleware
      console.log(`Type: ${req.method}`); // retirado do código original(visivel no terminal)
      next();
    }, getUsers)
    .post(addNewUser);

  app.route("/user/:userId").get(getUserId).put(updateUser).delete(removeUser);
};
export default routes;
