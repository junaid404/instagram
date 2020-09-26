const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar DataTime

  type DefaultUser {
    id: String!
    username: String!
    name: String!
    profile_image: String!
  }

  type Comment {
    user: DefaultUser!
    message: String!
  }

  type Post {
    id: String!
    likes: Float!
    caption: String!
    user: String!
    media: String!
    comments: [Comment]
    created_at: DataTime
  }

  type User {
    id: String!
    username: String!
    name: String!
    profile_image: String!
    website: String!
    email: String!
    bio: String!
    phone_number: String!
    posts: [Post]
    followers: [DefaultUser]
    following: [DefaultUser]
  }

  type Query {
    user: User!
  }
`;
