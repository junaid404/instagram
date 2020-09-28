import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $pass: String!) {
    login(object: { email: $email, password: $pass }) {
      token
      user {
        id
        username
        name
        profile_image
        website
        email
        bio
        phone_number
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Signup(
    $username: String!
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      object: {
        username: $username
        name: $name
        email: $email
        password: $password
      }
    ) {
      token
      user {
        id
        username
        name
        profile_image
        website
        email
        bio
        phone_number
      }
    }
  }
`;
