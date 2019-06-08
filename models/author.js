const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  pages: Number
});

var AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema]
});


const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
