const mongoose = require('mongoose');

const Reator2esquema = mongoose.model('Reator2esquema',{
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
  finalizado: Boolean,

});

module.exports = Reator2esquema;

