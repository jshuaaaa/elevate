import React from "react";
import { Link } from "react-router-dom";

const ProfileList = ({ courses, title }) => {
  if (!courses.length) {
    return <h3>No courses Yet</h3>;
  }

  return (
    <div className="profilediv">
      <h3 className='text-primary'>{title}</h3>
      <div className='flex-row justify-space-between my-4'>
        {courses &&
          courses.map((course) => (
            <div key={course._id} className='col-12 col-xl-6'>
              <div className='card mb-3'>
                <h4 className='card-header bg-dark text-light p-2 m-0'>
                  {course.name} <br />
                  <span className='text-white' style={{ fontSize: "1rem" }}>
                    currently has {course.lecture ? course.lecture.length : 0}{" "}
                    endorsed skill
                    {course.lecture && course.lecture.length === 1 ? "" : "s"}
                  </span>
                </h4>

                <Link
                  className='btn btn-block btn-squared btn-light text-dark'
                  to={`/courses/${course._id}`}
                >
                  View and endorse their skills.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;
