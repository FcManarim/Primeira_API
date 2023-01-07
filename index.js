import express from "express";
import routes from "./scr/routes/bookRoute";


const app = express();
const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json()); 
routes(app)

//exibir na console do server
app.listen(PORT, () => {console.log(`The server is running on port ${PORT}`)});


//exibir no navegador quando localhost:3000
app.get('/', (req, res) => {
    res.send(`Node and Express are running. Porta : ${PORT}`)
})