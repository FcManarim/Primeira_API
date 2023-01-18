import express from "express";
import routes from "./scr/routes/bookRoute";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { CorsOptions } from "cors";

const cors = require('cors');
const app = express();
const PORT = 3000;

//estava com erro na chamada da api no front:
//No 'Access-Control-Allow-Origin' header is present on the requested resource. 
//If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
//para resolver foi feito a instalação da depencia cors
//npm install cors
// e adicionado a linha abaixo para
app.use(cors())
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

//Conexão com o banco
// retirado internet criar conexão com o banco MongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/DbBook", { useNewUrlParser: true });

// body parser setup para poder USAR json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

//exibir na console do server
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

//exibir no navegador quando localhost:3000
app.get("/", (req, res) => {
  res.send(`Node and Express are running. Porta : ${PORT}`);
});



