const { User, Property } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    properties: async () => {
      return Property.find();
    },
    property: async (parent, { username }) => {
      return Property.findOne({ username });
    },
  },

  Mutation: {},
};

module.exports = resolvers;
d;
