const { AuthenticationError } = require('apollo-server-express');
const { Profile, Module, Course, Lecture, Activity, Review } = require('../models/index');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    courses: async () => {
      return Course.find()
    },

    modules: async () => {
      return Module.find()
    },

    lectures: async () => {
      return Lecture.find()
    },

    activity: async () => {
      return Activity.find()
    },

    reviews: async () => {
      return Review.find()
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    addCourse: async (parent, { name, category, description, price }) => {
      const course = await Course.create({ name, category, description, price });

      return { course };
    },
    addModuleToCourse: async (parent, { courseId, name }) => {
      const module = await Module.create({name})
      return Course.findOneAndUpdate(
        { _id: courseId},
        { $addToSet: {module: module._id}}
      )
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },
  },
};

module.exports = resolvers;
