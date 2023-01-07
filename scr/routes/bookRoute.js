import { addNewBook, getBooks } from "../controllers/bookController";

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


  app
    .route("/book:idBook")
    .delete((req, res) => {
      res.send("DELETE request successful!");
    })
    .put((req, res) => {
      res.send("PUT request successful!");
    });
};

export default routes;
