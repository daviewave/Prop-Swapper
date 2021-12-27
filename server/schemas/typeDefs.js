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
    zip: Int
    bedrooms: Int
  }

  type Query {
    users: [User]
    user(username: String!): User
    properties: [Property]
    property(propertyId: ID!): Property
  }
`;

module.exports = typeDefs;
