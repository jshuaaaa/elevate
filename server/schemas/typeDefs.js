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
    name: String!
    section: [Section]
  }

  type Course {
    _id: ID
    name: String!
    category: String!
    description: String
    module: [Module]
  }

  type Section {
    _id: ID
    name: String!
    lecture: [String]
    activities: [String]
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
    sections: [Section]!
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

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
