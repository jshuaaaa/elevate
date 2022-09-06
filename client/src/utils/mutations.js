import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_COURSE = gql`
  mutation addCourse($input: newCourse) {
    addCourse(input: $input) {
      name
      category
      description
      price
      courseAuthor
    }
  }
`;

export const ADD_MODULE_TO_COURSE = gql`
  mutation addModuleToCourse(
    $courseId: ID!
    $name: String!
    $description: String
  ) {
    addModuleToCourse(
      courseId: $courseId
      name: $name
      description: $description
    ) {
      name
      description
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation Mutation(
    $courseId: ID!
    $reviewText: String!
    $reviewAuthor: String!
  ) {
    addReviewToCourse(
      courseId: $courseId
      reviewText: $reviewText
      reviewAuthor: $reviewAuthor
    ) {
      _id
      reviewText
      reviewAuthor
      createdAt
    }
  }
`;

export const REMOVE_MODULE = gql`
  mutation deleteModule($courseId: ID!) {
    deleteBook(courseId: $courseId) {
      _id
      name
      lecture {
        _id
        name
      }
      activity {
        _id
        name
      }
    }
  }
`;

export const REMOVE_REVIEW = gql`
  mutation deleteReview($reviewId: ID!) {
    deleteReview(reviewId: $reviewId) {
      _id
      reviewText
      createdAt
    }
  }
`;

export const ADD_LECTURE_TO_MODULE = gql`
  mutation addLectureToModule(
    $moduleId: ID!
    $name: String!
    $url: String!
    $description: String
  ) {
    addLectureToModule(
      moduleId: $moduleId
      name: $name
      url: $url
      description: $description
    ) {
      _id
      name
      description
    }
  }
`;

export const ADD_ACTIVITY_TO_MODULE = gql`
  mutation addActivityToModule(
    $moduleId: ID!
    $name: String!
    $description: String
  ) {
    addActivityToModule(
      moduleId: $moduleId
      name: $name
      description: $description
    ) {
      _id
      name
      description
    }
  }
`;

// export const REMOVE_LECTURE = gql``;

// export const REMOVE_ACTIVITY = gql``;
