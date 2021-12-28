const { User, Property } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("property");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("property");
    },
    properties: async () => {
      return Property.find().populate("user");
    },
  },
};

module.exports = resolvers;
