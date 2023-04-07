import { gql } from '@apollo/client';

export const GET_BLOGS = gql`
  query getBlogs {
    getBlogs {
      _id
      title
      body
    }
  }
`;