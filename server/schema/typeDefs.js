const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Chronicle {
    _id: ID
    title: String
    body: String
  }

  type Query {
    chronicle: [Chronicle]
  }
`;

module.exports = typeDefs;