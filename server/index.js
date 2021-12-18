require('dotenv').config({ path: './.env' })

const { ApolloServer, makeExecutableSchema } = require('apollo-server');
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.eterj.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`);

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});