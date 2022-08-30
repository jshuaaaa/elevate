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
    module: [Module]
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
    createdAt: String!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    courses: [Course]!
    modules: [Module]!
    lectures: [Lecture]!
    acitivity: [Activity]!
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCourse(name: String!, category: String!, description: String!, price: String!): Course
    addModuleToCourse(courseId: ID!, name: String!): Module
    addSectionToModule(moduleId: ID!,name: String!, lecture: String!, activitity: String!): Section
    removeProfile: Profile

    "addCourse"
    "addReview"
    "addSection"
    "addModule"
    "removeSection"
    "removeModule"


    addSkill(profileId: ID!, skill: String!): Profile
    removeSkill(skill: String!): Profile
  }
`;

module.exports = typeDefs;
