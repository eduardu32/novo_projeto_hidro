const router = require("express").Router();
const Reator2esquema = require("../banco de dados/reator2esquema")
const Reator3esquema = require('../banco de dados/reator3esquema')

router.get('/todos2', async (req, res) => {
    try {
      const bateladas = await Reator2esquema.find();
      res.json(bateladas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get('/ultimaBatelada2', async (req, res) => {
    try {
      const ultimoItem = await Reator2esquema.findOne().sort({ _id: -1 }).limit(1);
      res.json(ultimoItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router.post('/atualizar2', async (req,res) => {
  const {
    data,
    hora,
    hidrogenio ,
    numeroCarreta ,
    inicioAquecimento,
    finalAquecimento,
    operador,
    iodo,
    proximaAmostra,
    inicioResfriamento,
    finalResfriamentov,
    temperatura ,
    Catalisador ,
    batelada,
    produto,
    finalizado ,
    catalisador
  } =req.body
  try {
    await Reator2esquema.create({
      data,
      hora,
      hidrogenio ,
      numeroCarreta ,
      inicioAquecimento,
      finalAquecimento,
      operador,
      iodo,
      proximaAmostra,
      inicioResfriamento,
      finalResfriamentov,
      temperatura ,
      Catalisador ,
      batelada,
      produto,
      finalizado ,
      catalisador
    })
    res.send("dados cadastrados/atualizados com sucesso")
  } catch (error) {
    res.status(500).send("Erro ao inserir os dados: " + error.message);
  }
})

router.get('/batelada2/:id', async (req, res) => {
  try {
    const batelada = await Reator2esquema.find({ batelada: req.params.id });
    if (!batelada) {
      return res.status(404).send('Batelada não encontrada');
    }
    res.send(batelada);
  } catch (error) {
    res.status(500).send('Erro ao buscar batelada: ' + error.message);
  }
});

router.get('/todos3', async (req, res) => {
  try {
    const bateladas = await Reator3esquema.find();
    res.json(bateladas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/ultimaBatelada3', async (req, res) => {
  try {
    const ultimoItem = await Reator3esquema.findOne().sort({ _id: -1 }).limit(1);
    res.json(ultimoItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/atualizar3', async (req,res) => {
const {
  data,
  hora,
  hidrogenio ,
  numeroCarreta ,
  inicioAquecimento,
  finalAquecimento,
  operador,
  iodo,
  proximaAmostra,
  inicioResfriamento,
  finalResfriamentov,
  temperatura ,
  Catalisador ,
  batelada,
  produto,
  finalizado ,
  catalisador
} =req.body
try {
  await Reator3esquema.create({
    data,
    hora,
    hidrogenio ,
    numeroCarreta ,
    inicioAquecimento,
    finalAquecimento,
    operador,
    iodo,
    proximaAmostra,
    inicioResfriamento,
    finalResfriamentov,
    temperatura ,
    Catalisador ,
    batelada,
    produto,
    finalizado ,
    catalisador
  })
  res.send("dados cadastrados/atualizados com sucesso")
} catch (error) {
  res.status(500).send("Erro ao inserir os dados: " + error.message);
}
})

router.get('/batelada3/:id', async (req, res) => {
try {
  const batelada = await Reator3esquema.find({ batelada: req.params.id });
  if (!batelada) {
    return res.status(404).send('Batelada não encontrada');
  }
  res.send(batelada);
} catch (error) {
  res.status(500).send('Erro ao buscar batelada: ' + error.message);
}
});

module.exports=router