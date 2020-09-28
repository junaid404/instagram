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
