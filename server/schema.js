const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
  uid: String,
  content: String,
  done: Boolean,
});
const Todo = model('Todo', todoSchema);

module.exports = Todo;