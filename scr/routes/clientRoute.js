const routes = (app) => {
  app
  .route("/client")
  .get((req, res) => {res.send(`Get realizado com sucesso`)});
};

export default routes;