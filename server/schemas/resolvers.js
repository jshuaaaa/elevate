const { AuthenticationError } = require("apollo-server-express");
const {
  Profile,
  Module,
  Course,
  Lecture,
  Activity,
  Review,
} = require("../models/index");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // Find by Id Routes
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    course: async ({ id }) => {
      return Course.findOne({ _id: id });
    },

    module: async ({ id }) => {
      return Module.find({ _id: id });
    },

    lecture: async ({ id }) => {
      return Lecture.find({ _id: id });
    },

    activity: async ({ id }) => {
      return Activity.find({ _id: id });
    },

    review: async ({ id }) => {
      return Review.find({ _id: id });
    },

    // Find all routes below

    reviews: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Review.find(params).sort({ createdAt: -1 });
    },

    courses: async () => {
      return Course.find();
    },

    modules: async () => {
      return Module.find();
    },

    lectures: async () => {
      return Lecture.find();
    },

    activities: async () => {
      return Activity.find();
    },

    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    addCourse: async (parent, { name, category, description, price }) => {
      const course = await Course.create({
        name,
        category,
        description,
        price,
      });

      return { course };
    },
    addModuleToCourse: async (parent, { courseId, name }) => {
      const module = await Module.create({ name });
      return Course.findOneAndUpdate(
        { _id: courseId },
        { $addToSet: { module: module._id } }
      );
    },
    addActivityToModule: async (parent, { moduleId, name }) => {
      const activity = await Activity.create({ name });
      return Module.findOneAndUpdate(
        { _id: moduleId },
        { $addToSet: { activity: activity._id } }
      );
    },
    addLectureToModule: async (parent, { moduleId, name, url }) => {
      const lecture = await Lecture.create({ name, url });
      return Module.findOneAndUpdate(
        { _id: moduleId },
        { $addToSet: { lecture: module._id } }
      );
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },
    addReview: async (parent, { reviewText }, context) => {
      if (context.user) {
        const review = await Review.create({
          reviewText,
          reviewAuthor: context.user.name,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { reviews: review._id } }
        );

        return review;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
