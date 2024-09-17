const produtos = Array.from({ length: 40 }, (v, i) => ({
  id: i + 1,
  nome: `Produto ${i + 1}`,
  preco: (Math.random() * 100).toFixed(2),
  marca: `Marca ${i + 1}`
}));

module.exports = produtos;
