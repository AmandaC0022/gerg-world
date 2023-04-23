const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Chronicle {
    _id: ID
    title: String
    body: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    getBlogs: [Chronicle]
    findBlog(id: ID!): Chronicle
  }

  type Mutation {
    createBlog(title: String!, body: String!): Chronicle
    deleteBlog(id: ID!): Chronicle
    updateBlog(id: ID, title: String, body: String): Chronicle
  }
`;

module.exports = typeDefs;