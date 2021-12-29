const { User, Property } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //get information about users
    users: async () => {
      return User.find().populate("property");
    },
    //i think this is supposed to find the property assiociated with a specific user
    //what is the parent parameter here?
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("property");
    },
    //allows to get properties and information about them
    properties: async () => {
      return Property.find().populate("user");
    },
  },

  Mutation: {
    //same question on the parent parameter here
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found fool!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    //TODO: MUTATION/FUNCTION FOR ADDING PROPERTY
    //TODO: right now, this mutation works by passing in the current user as a parameter, this is unnecassary bc the user has to be logged on to  add their property ... basically if the user does not have a property associated with account, we will need to save the username and pass that in as a parameter
    addProperty: async ({ address, city, state, zip, bedrooms, user }) => {
      const property = await Property.create({
        address,
        city,
        state,
        zip,
        bedrooms,
        user,
      });
      return { property };
    },
  },
};

module.exports = resolvers;
