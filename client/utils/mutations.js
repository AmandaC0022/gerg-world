import { gql } from '@apollo/client';

export const CREATE_BLOG = gql`
  mutation createBlog($title: String!, $body: String!) {
    createBlog(title: $title, body: $body) {
      _id
      title
      body
    }
  }
`;
