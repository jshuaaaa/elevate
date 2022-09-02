const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID

    name: String!
    email: String!
    password: String!
    courses: [Course]
    reviews: [Review]
  }

  type Module {
    _id: ID
    name: String
    lecture: [Lecture]
    activity: [Activity]
  }

  type Course {
    _id: ID
    name: String!
    category: String!
    description: String
    price: String
    courseAuthor: String
    module: [Module]
    review: [Review]
  }

  type Lecture {
    _id: ID
    name: String
  }

  type Activity {
    _id: ID
    name: String
  }

  type Review {
    _id: ID
    reviewText: String!
    reviewAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  input newCourse {
    name: String
    description: String
    category: String
    price: String
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    courses: [Course]!
    modules: [Module]!
    lectures: [Lecture]!
    activities: [Activity]!
    reviews: [Review]!

    course(name: String!): Course
    coursePage(courseId: ID!): Course
    module(id: ID!): Module
    lecture(id: ID!): Lecture
    activity(id: ID!): Activity
    review(id: ID!): Review
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCourse(input: newCourse): User
    addModuleToCourse(courseId: ID!, name: String!): Module
    addLectureToModule(moduleId: ID!, name: String!, url: String!): Lecture
    addActivityToModule(moduleId: ID!, name: String!): Activity

    addSkill(profileId: ID!, skill: String!): Profile
    removeSkill(skill: String!): Profile
  }
`;

module.exports = typeDefs;
