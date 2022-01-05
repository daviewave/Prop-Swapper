const { User, Property } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

//ROUGH DRAFT OF ALL QUERIES AND MUTATIONS WE WILL NEED:
//QUERIES
//1. get user for logins
//2. get the current users property
//3. get properties based on location searched (location matches properties 'state')
//4. get the user associated with a searched/selected property

//MUTATIONS
//1. addUser
//2. login
//3. removeUser
//4. addProperty

const resolvers = {
  //1. get users
  Query: {
    //get information about users
    users: async () => {
      return User.find().populate("property");
    },

    //2. get property based on current user
    //what is the parent parameter here?
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("property");
    },

    //There will be an input box on the 'search page' where we will have to get the input (i think it will end up being a dropdown) and pass the input to this function
    //TODO: use the location passed in to QUERY all properties with the state that was passed in
    properties: async (location) => {
      if (location === Property.find({ state }).populate("state")) {
        return Property.find().populate("user");
      }
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

    //NOTE: SHOULD WE TAKE OUT CITY FOR THE MVP?
    addProperty: async (
      parent,
      { address, city, state, zip, bedrooms, user },
      context
    ) => {
      const property = await Property.create({
        address,
        city,
        state,
        zip,
        bedrooms,
        user: context.user._id,
      });

      await User.findOneAndUpdate(
        {
          _id: context.user._id,
        },
        {
          property: property._id,
        }
      );
      return { property };
    },
  },
};

module.exports = resolvers;
