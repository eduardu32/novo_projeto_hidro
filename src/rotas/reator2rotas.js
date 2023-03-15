const router = require("express").Router();
const Reator2esquema = require("../banco de dados/reator2esquema")

router.get('/todos', async (req, res) => {
    try {
      const bateladas = await Reator2esquema.find();
      res.json(bateladas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get('/ultimaBatelada', async (req, res) => {
    try {
      const ultimoItem = await Reator2esquema.findOne().sort({ _id: -1 }).limit(1);
      res.json(ultimoItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router.post('/atualizar', async (req,res) => {
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
      finalizado ,
      catalisador
    })
    res.send("dados cadastrados/atualizados com sucesso")
  } catch (error) {
    res.status(500).send("Erro ao inserir os dados: " + error.message);
  }
})

router.get('/batelada/:id', async (req, res) => {
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


module.exports=router