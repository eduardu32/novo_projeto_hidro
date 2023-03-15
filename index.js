const express = require('express');
const cors = require('cors');
const reator2rotas= require("./src/rotas/reator2rotas");
const conexao = require('./src/banco de dados/conexao');

const app = express();
app.use(cors());

app.use(express.json())
app.use(
  express.urlencoded({extended:true})
)

conexao()
app.use("/reator2",reator2rotas)




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
})
