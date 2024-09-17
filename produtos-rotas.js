const express = require('express');
const router = express.Router();
const Joi = require('joi');
const produtos = require('./produtos-modelo');

const produtoSchema = Joi.object({
  nome: Joi.string().min(3).required(),
  preco: Joi.number().greater(0).required(),
  marca: Joi.string().min(3).required()
});

router.get('/', (req, res) => {
  let { pagina = 1, tamanho = 10, nome } = req.query;
  pagina = parseInt(pagina);
  tamanho = parseInt(tamanho);

  let resultado = produtos;

  if (nome) {
    resultado = resultado.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase()));
  }

  const paginacao = resultado.slice((pagina - 1) * tamanho, pagina * tamanho);
  res.json(paginacao);
});

router.get('/:id', (req, res) => {
  const produto = produtos.find(p => p.id === parseInt(req.params.id));
  if (!produto) return res.status(404).send('Produto não encontrado.');
  res.json(produto);
});

router.post('/', (req, res) => {
  const { error } = produtoSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { nome, preco, marca } = req.body;
  const novoProduto = {
    id: produtos.length + 1,
    nome,
    preco,
    marca
  };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

router.put('/:id', (req, res) => {
  const produto = produtos.find(p => p.id === parseInt(req.params.id));
  if (!produto) return res.status(404).send('Produto não encontrado.');

  const { error } = produtoSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { nome, preco, marca } = req.body;
  if (nome) produto.nome = nome;
  if (preco) produto.preco = preco;
  if (marca) produto.marca = marca;

  res.json(produto);
});

router.delete('/:id', (req, res) => {
  const index = produtos.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Produto não encontrado.');

  const produtoRemovido = produtos.splice(index, 1);
  res.json(produtoRemovido[0]);
});

module.exports = router;
