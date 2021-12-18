const { gql } = require("apollo-server");

module.exports = gql`
type Todo {
  _id: String
  uid: String
  done: Boolean
  content: String
}
type Query {
  todos: [Todo]
}
type Mutation {
  addTodo(content: String): Todo
  removeTodo(uid: String): Todo
}
`