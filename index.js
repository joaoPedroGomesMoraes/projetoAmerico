const express = require('express');
const app = express();

// Rota 1
app.get('/', (req, res) => {
  res.send('<h1>Página inicial</h1>');
});

// Rota 2
app.get('/sobre', (req, res) => {
  res.send('<h1>Sobre </h1>');
});

// Rota 3
app.get('/contato', (req, res) => {
  res.send('<h1>Contato</h1>');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
