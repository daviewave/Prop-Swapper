import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      property {
        address
        city
        state
        zip
        bedrooms
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      property {
        address
        state
        city
        bedrooms
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      property {
        address
        city
        state
        zip
        bedrooms
      }
    }
  }
`;
