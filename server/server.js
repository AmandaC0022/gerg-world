const express = require('express'); 
require('dotenv').config();
const PORT = process.env.PORT; 
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');

// creates the express app 
const app = express(); 

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//middleware
app.use(express.json()); 
server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: false }));

//connect to db
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});
  