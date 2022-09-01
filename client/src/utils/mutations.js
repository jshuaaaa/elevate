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
  mutation addCourse(
    $name: String!
    $category: String!
    $description: String!
    $price: String!
  ) {
    addCourse(
      name: $name
      category: $category
      description: $description
      price: $price
    ) {
      _id
      name
      category
      description
      price
    }
  }
`;

export const ADD_MODULE = gql`
  mutation addModule($courseId: ID!, $name: String!) {
    addModule(courseId: $courseId, name: $name) {
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

export const ADD_REVIEW = gql`
  mutation addReview($reviewText: String!) {
    addReview(reviewText: $reviewText) {
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

// export const ADD_LECTURE = gql``;

// export const ADD_ACTIVITY = gql``;

// export const REMOVE_LECTURE = gql``;

// export const REMOVE_ACTIVITY = gql``;
