const express = require('express'); 
// const chronicleRoutes = require('./routes/chronicles'); 
const PORT = process.env.PORT || 8000;
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
// const path = require('path');
const { typeDefs, resolvers } = require('./schemas');

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
// app.use((req, res, next) => {
//     console.log(res.path, req.method); 
//     next(); 
// })

//routes
// app.use('/api/chronicles', chronicleRoutes); 

//connect to db
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});
  