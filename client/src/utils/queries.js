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
      courseAuthor
    }
  }
`;

export const QUERY_SINGLE_COURSE = gql`
  query singleCourse($name: String!) {
    courseName(name: $name) {
      _id
      name
      category
      description
      price
    }
  }
`;

export const QUERY_SINGLE_COURSE_PAGE = gql`
  query singleCourse($courseId: ID!) {
    course(courseId: $courseId) {
      _id
      name
      category
      description
      price
      courseAuthor
      module {
        _id
        name
        description
        lecture {
          _id
        }
        activity {
          _id
        }
      }
      review {
        _id
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

export const QUERY_MODULES = gql`
  query modules {
    modules {
      _id
      name
      description
    }
  }
`;

export const QUERY_COURSE_MODULES = gql`
  query courseModules($courseId: ID!) {
    course(courseId: $courseId) {
      module {
        _id
        name
        description
      }
    }
  }
`;

export const QUERY_SINGLE_MODULE = gql`
  query singleModule($moduleId: ID!) {
    module(moduleId: $moduleId) {
      _id
      name
      description
      lecture {
        _id
        name
        description
      }
      activity {
        _id
        name
        description
      }
    }
  }
`;

export const QUERY_SINGLE_REVIEW = gql`
  query Query($reviewId: ID!) {
    review(reviewId: $reviewId) {
      _id
      reviewText
      reviewAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_LECTURE = gql`
  query singleLecture($lectureId: ID!) {
    lecture(lectureId: $lectureId) {
      _id
      name
      url
      description
    }
  }
`;

export const QUERY_SINGLE_ACTIVITY = gql`
  query singleActivity($activityId: ID!) {
    activity(activityId: $activityId) {
      _id
      name
      description
    }
  }
`;
