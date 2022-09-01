import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_COURSE } from "../utils/queries";
// import { ADD_COURSE, ADD_MODULE, ADD_REVIEW } from "../utils/mutations";
import ReviewList from "../components/ReviewList";

function Course() {
  const { courseId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_COURSE, {
    // pass URL parameter
    variables: { courseId: courseId },
  });

  const course = data?.course || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='my-3'>
      <h3 className='card-header bg-dark text-light p-2 m-0'>{course.name}</h3>
      <div className='bg-light p-4'>
        <p>Course Summary: {course.description}</p>
        <p>${course.price}</p>
        <p>Category: {course.category}</p>
      </div>

      <div className='my-5 bg-dark p-2 text-white'>
        <h2>Reviews</h2>
        <ReviewList reviews={course.reviews} />
      </div>
    </div>
  );
}

export default Course;
