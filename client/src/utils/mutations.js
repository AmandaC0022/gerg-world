import { gql } from '@apollo/client';

export const CREATE_BLOG = gql`
  mutation CreateBlog($title: String!, $body: String!) {
    createBlog(title: $title, body: $body) {
      _id
      title
      body
      createdAt
    }
  }
`;

export const DELETE_BLOG = gql`
  mutation deleteBlog($id: ID!) {
    deleteBlog(id: $id) {
      _id
      title
      body
      createdAt
    }
  }
`;

export const UPDATE_BLOG = gql`
  mutation updateBlog($title: String $body: String, $id: ID) {
    updateBlog(title: $title, body: $body, id:$id) {
      _id
      title
      body
      createdAt
    }
  }
`;

export const CREATE_GERGAL = gql`
  mutation createGergal($word: String!, $definition: String!) {
    createGergal(word: $word, definition: $definition) {
      _id
      word
      definition
      createdAt
    }
  }
`;

export const UPDATE_GERGAL = gql`
  mutation updateGergal($word: String, $definition: String, $id: ID) {
    updateGergal(word: $word, definition: $definition, id:$id) {
      _id
      word
      definition
      createdAt
    }
  }
`;

export const DELETE_GERGAL = gql`
  mutation deleteGergal($id: ID!) {
    deleteGergal(id: $id) {
      _id
      word
      definition
      createdAt
    }
  }
`;

export const CREATE_GERGISM = gql`
  mutation CreateGergism($phrase: String!) {
    createGergism(phrase: $phrase) {
      _id
      phrase
      createdAt
    }
  }
`;

export const UPDATE_GERGISM = gql`
  mutation updateGergism($phrase: String $id: ID) {
    updateGergism(phrase: $phrase, id:$id) {
      _id
      phrase
      createdAt
    }
  }
`;

export const DELETE_GERGISM = gql`
  mutation deleteGergism($id: ID!) {
    deleteGergism(id: $id) {
      _id
      phrase
      createdAt
    }
  }
`;

export const CREATE_RECIPE = gql`
  mutation CreateRecipe($title: String, $category: [String], $serves: String, $cooktime: String, $ingredients: [String], $cookingsteps: [String], $imageurl: String)) {
    createRecipe(title: $title, category: $category, serves: $servers, cooktime: $cooktime, ingredients: $ingredients, cookingsteps: $cookingsteps, imageurl: $imageurl)) {
      _id
      title
      category
      servers
      cooktime
      ingredients
      cookingsteps
      imageurl
    }
  }
`;

export const UPDATE_RECIPE = gql`
  mutation UpdateRecipe($title: String, $category: [String], $serves: String, $cooktime: String, $ingredients: [String], $cookingsteps: [String], $imageurl: String)) {
    updateRecipe(title: $title, category: $category, serves: $servers, cooktime: $cooktime, ingredients: $ingredients, cookingsteps: $cookingsteps, imageurl: $imageurl)) {
      _id
      title
      category
      servers
      cooktime
      ingredients
      cookingsteps
      imageurl
    }
  }
`;

export const DELETE_RECIPE = gql`
  mutation DeleteRecipe($title: String, $category: [String], $serves: String, $cooktime: String, $ingredients: [String], $cookingsteps: [String], $imageurl: String)) {
    DeleteRecipe(title: $title, category: $category, serves: $servers, cooktime: $cooktime, ingredients: $ingredients, cookingsteps: $cookingsteps, imageurl: $imageurl)) {
      _id
      title
      category
      servers
      cooktime
      ingredients
      cookingsteps
      imageurl
    }
  }
`;