const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['journal', 'book', 'conference'],
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true, // Journal Name / Conference Name / Book Title
  },
  year: {
    type: String,
    required: true,
  },
  doi: {
    type: String,
    default: null,
  },

  // Optional fields depending on category
  location: {
    type: String, // For conferences only
    default: null,
  },
  chapterTitle: {
    type: String, // For book chapters
    default: null,
  },
  publisher: {
    type: String, // For books
    default: null,
  },
  isbn: {
    type: String, // For books
    default: null,
  }
}, { timestamps: true });

module.exports = mongoose.model('Publication', publicationSchema, 'cv_publication');
