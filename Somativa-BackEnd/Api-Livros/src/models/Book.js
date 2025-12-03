// src/models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    anoPublicacao: { type: Number, required: true },
    isbn: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Book', bookSchema);
