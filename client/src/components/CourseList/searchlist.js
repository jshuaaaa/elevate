import React from "react";
import { Link } from "react-router-dom";
const SearchList = ({ courses }) => {
  console.log(courses);
  console.log(courses.name);
  if (!courses) {
    return <h3>No courses Yet</h3>;
  }
  return (
    <div className='col-sm-6'>
      <div key={courses._id} className='card mb-3' style={{ width: "18rem" }}>
        <h4 className='card-header bg-primary text-light p-2 m-0'>
          <Link className='text-light' to={`/courses/${courses.name}`}>
            {courses.name}
          </Link>
        </h4>
        <div className='card-body bg-light p-2'>
          <p className='card-text'>{courses.category}</p>
          <p className='card-text '>${courses.price}</p>
          <Link className='btn btn-primary' to={`/courses/${courses._id}`}>
            View course
          </Link>
          <Link className='btn btn-primary' to={`/courses/${courses._id}`}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
