const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: String!
    username: String!
    name: String!
    profile_image: String
    website: String
    email: String!
    bio: String
    phone_number: String
    last_checked: String
  }

  input credentials {
    username: String!
    name: String!
    email: String!
    password: String!
  }

  input loginCredentials {
    email: String!
    password: String!
  }

  type Success {
    token: String!
    user: User!
  }

  type Query {
    user(id: String!): User!
  }

  type Mutation {
    createUser(object: credentials!): Success!
    login(object: loginCredentials!): Success!
  }
`;
