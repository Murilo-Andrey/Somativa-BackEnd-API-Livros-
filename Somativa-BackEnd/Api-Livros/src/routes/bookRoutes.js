// src/routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// POST /api/books - Adicionar livro
router.post('/books', async (req, res) => {
  try {
    const { titulo, autor, anoPublicacao, isbn } = req.body;

    if (!titulo || !autor || !anoPublicacao || !isbn) {
      return res
        .status(400)
        .json({ message: 'Todos os campos são obrigatórios.' });
    }

    const book = await Book.create({ titulo, autor, anoPublicacao, isbn });
    return res.status(201).json(book);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: 'ISBN já cadastrado.' });
    }
    return res
      .status(500)
      .json({ message: 'Erro ao criar livro', error: err.message });
  }
});

// GET /api/books - Listar todos os livros
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    return res.json(books);
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro ao buscar livros', error: err.message });
  }
});

// GET /api/books/search?title=algo - Buscar por título (parcial, case-insensitive)
router.get('/books/search', async (req, res) => {
  try {
    const { title } = req.query;

    if (!title) {
      return res
        .status(400)
        .json({ message: 'Parâmetro "title" é obrigatório.' });
    }

    const regex = new RegExp(title, 'i'); // i = case insensitive
    const books = await Book.find({ titulo: regex });

    return res.json(books);
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro na busca', error: err.message });
  }
});

// DELETE /api/books/:isbn - Remover livro pelo ISBN
router.delete('/books/:isbn', async (req, res) => {
  try {
    const { isbn } = req.params;
    const deleted = await Book.findOneAndDelete({ isbn });

    if (!deleted) {
      return res.status(404).json({ message: 'Livro não encontrado.' });
    }

    return res.json({ message: 'Livro removido com sucesso.' });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro ao remover livro', error: err.message });
  }
});

module.exports = router;
