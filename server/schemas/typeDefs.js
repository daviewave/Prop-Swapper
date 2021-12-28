const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    property: Property
  }

  type Property {
    _id: ID
    address: String
    city: String
    state: String
    zip: Int
    bedrooms: Int
    users: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    properties: [Property]
    property(propertyId: ID!): Property
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
