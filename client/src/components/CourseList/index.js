import React from "react";
import { Link } from "react-router-dom";

const CourseList = ({ courses, title, showTitle = true }) => {
  if (!courses.length) {
    return <h3>No courses Yet</h3>;
  }
  console.log(courses);

  return (
    <div id='courses'>
      {showTitle && <h3>{title}</h3>}
      {courses &&
        courses.map((course) => (
          <div key={course._id} className='card mb-3'>
            <h4 className='card-header bg-primary text-light p-2 m-0'>
              <Link className='text-light' to={`/courses/${course.name}`}>
                {" "}
                {course.name}
                <br />
              </Link>
            </h4>
            <div className='card-body bg-light p-2'>
              <p>{course.category}</p>
              <p>${course.price}</p>
              <p>{course.description}</p>
            </div>
            <Link
              className='btn btn-primary btn-block btn-squared'
              to={`/courses/${course._id}`}
            >
              Join the discussion on this course.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CourseList;
