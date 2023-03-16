const mongoose = require('mongoose');

const Reator3esquema = mongoose.model('Reator3esquema',{
  data: String,
  hora: String,
  hidrogenio: Number,
  numeroCarreta: Number,
  inicioAquecimento: String,
  finalAquecimento: String,
  operador: String,
  iodo: Number,
  proximaAmostra: String,
  inicioResfriamento: String,
  finalResfriamentov: String,
  temperatura: Number,
  Catalisador: Number,
  batelada: String,
  produto: String,
  finalizado: Boolean,

});

module.exports = Reator3esquema;

