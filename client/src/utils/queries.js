import { gql } from '@apollo/client';

export const GET_BLOGS = gql`
  query getBlogs {
    getBlogs {
      _id
      title
      body
      createdAt
    }
  }
`;

export const FIND_BLOG = gql`
  query findBlog($id: ID!) {
    findBlog(id: $id) {
      _id
      title
      body
      createdAt
    }
  }
`;

export const FIND_GERGAL = gql`
  query findGergal($id: ID!) {
    findGergal(id: $id) {
      _id
      word
      definition
      createdAt
    }
  }
`;

export const FIND_GERGALS = gql`
  query findGergals {
    findGergals {
      _id
      word
      definition
      createdAt
    }
  }
`;

export const FIND_GERGISMS = gql`
  query findGergisms {
    findGergisms {
      _id
      phrase
      createdAt
    }
  }
`;

export const FIND_GERGISM = gql`
  query findGergism($id: ID!) {
    findGergism(id: $id) {
      _id
      phrase
      createdAt
    }
  }
`;

export const FIND_RECIPES = gql`
  query findRecipes {
    findRecipes {
      _id
      title
      category
      serves
      cooktime
      ingredients
      cookingsteps
      imageurl
    }
  }
`;

export const FIND_RECIPE = gql`
  query findRecipe($id: ID!) {
    findRecipe(id: $id) {
      _id
      title
      category
      serves
      cooktime
      ingredients
      cookingsteps
      imageurl
    }
  }
`;
