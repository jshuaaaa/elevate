import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_COURSE_PAGE } from "../../utils/queries";
import { Link } from "react-router-dom";

const CourseName = ({ courseId }) => {
  const { loading, error, data } = useQuery(QUERY_SINGLE_COURSE_PAGE, {
    variables: { courseId: courseId },
  });

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;
  // console.log(data);
  const course = data?.course || [];
  // console.log(course.name);

  return (
    <>
      <h4 className='card-header bg-info p-1'>{course.name}</h4>
    </>
  );
};

export default CourseName;
