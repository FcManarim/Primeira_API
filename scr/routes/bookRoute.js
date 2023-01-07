const routes = (app) => {
  app
    .route("/book")

    .get((req, res, next) => {
      //exemplo de interação com midleware retirado do código original(visivel no terminal)
      console.log(`Chamada de: ${req.originalUrl}`)
      console.log(`Chamada do tipo: ${req.method}`)
      next();
    },
    (req, res, next) =>
      res.send("Get realizado com sucesso!"))

    .post((req, res) => {
      res.send("Post realizado com sucesso!");
    });

    app.route("/book:idBook")
    .delete((req, res) => {
      res.send("Delete realizado com sucesso!");
    })
    .put((req, res) => {
      res.send("Atualização realizada com sucesso!");
    })
};

export default routes;
