import { useMutation, gql } from '@apollo/client';

export const CREATE_BLOG = gql`
  mutation CreateBlog($title: String!, $body: String!) {
    createBlog(title: $title, body: $body) {
      _id
      title
      body
    }
  }
`;
