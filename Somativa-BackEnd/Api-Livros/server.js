// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const bookRoutes = require('./src/routes/bookRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Rota básica para teste
app.get('/', (req, res) => {
  res.json({ message: 'Mange Book API Online' });
});

// Rotas de livros
app.use('/api', bookRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
});
