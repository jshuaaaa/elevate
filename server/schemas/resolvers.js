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

    course: async (parent, { courseId }) => {
      return Course.findOne({ _id: courseId });
    },

    coursePage: async (parent, { id }) => {
      return Course.findOne({ _id: id });
    },

    module: async (parent, { moduleId }) => {
      return Module.findOne({ _id: moduleId });
    },

    lecture: async (parent, { id }) => {
      return Lecture.findOne({ _id: id });
    },

    activity: async (parent, { id }) => {
      return Activity.findOne({ _id: id });
    },

    review: async (parent, { id }) => {
      return Review.findOne({ _id: id });
    },

    // Find all routes below

    reviews: async () => {
      return Review.find();
    },

    profiles: async () => {
      return Profile.find();
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

    reviews: async () => {
      return Review.find();
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
    addCourse: async (
      parent,
      { input: { name, category, description, price } },
      context
    ) => {
      if (context.user) {
        const course = await Course.create({
          name,
          category,
          description,
          price,
          courseAuthor: context.user.name,
        });

        console.log(context.user);

        await Profile.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { courses: { _id: course._id } },
          },
          {
            new: true,
          }
        );

        return course;
      }
    },
    addModuleToCourse: async (parent, { courseId, name }) => {
      const module = await Module.create({ name });
      return Course.findOneAndUpdate(
        { _id: courseId },
        { $addToSet: { module: { _id: module._id } } }
      );
    },
    addActivityToModule: async (parent, { moduleId, name }) => {
      const activity = await Activity.create({ name });
      return Module.findOneAndUpdate(
        { _id: moduleId },
        { $addToSet: { activity: { _id: activity._id } } }
      );
    },
    addLectureToModule: async (parent, { moduleId, name, url }) => {
      const lecture = await Lecture.create({ name, url });
      return Module.findOneAndUpdate(
        { _id: moduleId},
        { $addToSet: {lecture:{lecture: lecture._id}}}
      )
    },
    addReviewToCourse: async (parent, {courseId, reviewText, reviewAuthor}) => {
      const review = await Review.create({reviewText, reviewAuthor})
      return Course.findOneAndUpdate(
        {_id: courseId},
        {$addToSet: {reviews:{review: review._id}}}
      )
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
  },
};

module.exports = resolvers;
