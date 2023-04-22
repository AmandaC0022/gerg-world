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

export const GET_SINGLE_BLOG = gql`
  query singleBlogs($blogId: ID!) {
    blog(blogId: $blogId) {
      _id
      title
      body
      createdAt
    }
  }
`;