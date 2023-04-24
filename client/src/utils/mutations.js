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