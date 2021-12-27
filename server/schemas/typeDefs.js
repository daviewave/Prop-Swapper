const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Property {
    _id: ID
    address: String
    city: String
    state: String
    zip: INT
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
    addProperty(
      UserId: ID!
      address: String!
      city: String!
      state: String!
      zip: INT!
    ): User
    removeProperty(propertyId: ID!): Property
  }
`;

module.exports = typeDefs;
