const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Chronicle {
    _id: ID
    title: String
    body: String
    createdAt: String
    updatedAt: String
  }

  type Gergal {
    _id: ID
    word: String
    definition: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    getBlogs: [Chronicle]
    findBlog(id: ID!): Chronicle
    findGergals: [Gergal]
    findGergal(id: ID!): Gergal
  }

  type Mutation {
    createBlog(title: String!, body: String!): Chronicle
    deleteBlog(id: ID!): Chronicle
    updateBlog(id: ID, title: String, body: String): Chronicle
    createGergal(word: String!, definition: String!): Gergal
    deleteGergal(id: ID!): Gergal
    updateGergal(id: ID, word: String, definition: String): Gergal
  }
`;

module.exports = typeDefs;