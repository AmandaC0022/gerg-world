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
  }

  type Mutation {
    createBlog(title: String!, body: String!): Chronicle
    deleteBlog(blogId: ID!): Chronicle
  }
`;

module.exports = typeDefs;