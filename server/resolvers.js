const { v4: uuidv4 } = require('uuid');
const Todo = require('./schema');

module.exports = {
  Query: {
    todos: async () => await Todo.find({}).sort({ _id: -1 }),
  },
  Mutation: {
    addTodo: async (obj, args, ctx) => await Todo.create({ content: args.content, done: false, uid: uuidv4() }),
    removeTodo: async (obj, args, ctx) => await Todo.deleteOne({ uid: args.uid }),
    // updateTodo: (obj, args, ctx) => await Todo.update({_id: args._id},{ content: args.content, done: args.done }),
  }
};
