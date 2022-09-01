import { gql } from "@apollo/client";

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      courses {
        _id
        name
        category
        description
      }
      reviews {
        _id
        reviewText
      }
    }
  }
`;

export const QUERY_COURSES = gql`
  query allCourses {
    courses {
      _id
      name
      category
      description
      price
    }
  }
`;

export const QUERY_SINGLE_COURSE = gql`
  query singleCourse($courseId: ID!) {
    course(id: $courseId) {
      _id
      name
      category
      description
      price
      module {
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
      review {
        _id
        reviewText
        reviewAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_REVIEWS = gql`
  query reviews {
    reviews {
      _id
      reviewText
      reviewAuthor
      createdAt
    }
  }
`;
