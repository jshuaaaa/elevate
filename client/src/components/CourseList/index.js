import React from "react";
import { Link } from "react-router-dom";

const CourseList = ({ courses, title, showTitle = true }) => {
  if (!courses.length) {
    return <h3>No courses Yet</h3>;
  }
  console.log(courses);

  return (
    <>
      {showTitle && <h3>{title}</h3>}
      {courses &&
        courses.map((course) => (
          <div className='cardCont'>
            <div
              key={course._id}
              className='card mb-3 cardo'
              style={{ width: "25rem", height: "20rem" }}
            >
              <h4 className='card-header bg-primary text-light p-2 m-0'>
                <Link className='text-light' to={`/courses/${course.id}`}>
                  {course.name}
                </Link>
              </h4>
              <div className='card-body bg-light p-2'>
                <p className='card-text'>{course.category}</p>
                <p className='card-text'>${course.price}</p>
                <Link className='btn btn-primary' to={`/courses/${course._id}`}>
                  View course
                </Link>
                <Link className='btn btn-primary' to={`/courses/${course._id}`}>
                  Register
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CourseList;
