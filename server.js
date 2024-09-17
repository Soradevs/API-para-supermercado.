const express = require('express');
const app = express();
const port = 3000;
const produtosRotas = require('./produtos-rotas');

app.use(express.json());
app.use('/produtos', produtosRotas);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
