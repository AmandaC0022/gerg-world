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

  type Gergism {
    _id: ID
    phrase: String
    createdAt: String
  }

  type Recipe {
    _id: ID
    title: String
    category: [String]
    serves: String
    cooktime: String
    ingredients: [String]
    cookingsteps: [String]
    imageurl: String
    createdAt: String
  }

  type Category {
    _id: ID
    name: String
  }

  type Query {
    getBlogs: [Chronicle]
    findBlog(id: ID!): Chronicle
    findGergals: [Gergal]
    findGergal(id: ID!): Gergal
    findGergisms: [Gergism]
    findGergism(id: ID!): Gergism
    findRecipes: [Recipe]
    findRecipe(id: ID!): Recipe
  }

  type Mutation {
    createBlog(title: String!, body: String!): Chronicle
    deleteBlog(id: ID!): Chronicle
    updateBlog(id: ID, title: String, body: String): Chronicle
    createGergal(word: String!, definition: String!): Gergal
    deleteGergal(id: ID!): Gergal
    updateGergal(id: ID, word: String, definition: String): Gergal
    createGergism(phrase: String!): Gergism
    updateGergism(id: ID, phrase: String): Gergism
    deleteGergism(id: ID!): Gergism
    createRecipe(title: String, category: [String], serves: String, cooktime: String, ingredients: [String], cookingsteps: [String], imageurl: String): Recipe
    updateRecipe(id: ID, title: String, category: [String], serves: String, cooktime: String, ingredients: [String], cookingsteps: [String], imageurl: String): Recipe
    deleteRecipe(id: ID!): Recipe
  }
`;

module.exports = typeDefs;