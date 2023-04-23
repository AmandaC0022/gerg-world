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
  query findBlog($blogId: ID!) {
    blog(blogId: $blogId) {
      _id
      title
      body
      createdAt
    }
  }
`;