const { gql } = require("apollo-server-express");

//NOTE: Need to change city from string to dropdown
//NOTE: SHOULD WE TAKE OUT CITY FOR THE MVP?
//NOTE: I think we should have a phone number assiociated with the user too.
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
    removeUser: User
    addProperty(
      address: String!
      city: String!
      state: String!
      zip: Int!
      bedrooms: Int!
      user: String!
    ): Property
  }
`;

module.exports = typeDefs;
