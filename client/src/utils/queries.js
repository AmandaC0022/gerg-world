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