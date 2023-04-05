import { gql } from '@apollo/client';

export const QUERY_BLOG = gql`
  query blog {
    blog {
      _id
      title
      body
    }
  }
`;