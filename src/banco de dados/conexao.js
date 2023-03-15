
const mongoose = require('mongoose');

function conexao(){

    mongoose.connect('mongodb+srv://eduardu32:eduardu32Du@servidorhidro.cj0swan.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log("Conexão com o MongoDB estabelecida com sucesso!");
  }).catch(err => {
    console.error("Erro ao conectar com o MongoDB: ", err);
    process.exit();
  });

}



module.exports = conexao