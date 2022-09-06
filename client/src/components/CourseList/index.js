import React from "react";
import { Link } from "react-router-dom";
import CourseName from "./courseName";
// function shuffleArray(array) {
//   let i = array.length - 1;
//   for (; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// }

const CourseList = ({ courses, title, showTitle = true }) => {
  if (!courses.length) {
    return <h3>No courses Yet</h3>;
  }

  // const shuffledPosts = shuffleArray(courses);

  // console.log(courses);

  return (
    <>
      {showTitle && <h3>{title}</h3>}
      {courses.map((course) => (
        <div className='cardCont'>
          <div
            key={course._id}
            className='card cardo'
            style={{ width: "25rem", height: "20rem" }}
          >
            <Link className='text-light' to={`/courses/${course._id}`}>
              <CourseName courseId={course._id} />
            </Link>

            <div className='card-body bg-light p-2'>
              <p className='card-text'>Category: {course.category}</p>
              {/* <p className='card-text'>${course.price}</p> */}
              <Link className='btn btn-primary' to={`/courses/${course._id}`}>
                View course
              </Link>
              {/* <Link className='btn btn-primary' to={`/courses/${course._id}`}>
                Register
              </Link> */}
            </div>
          </div>
          <div
            id='carouselExampleIndicators'
            class='carousel slide'
            data-ride='carousel'
          >
            <ol class='carousel-indicators'>
              <li
                data-target='#carouselExampleIndicators'
                data-slide-to='0'
                class='active'
              ></li>
              <li
                data-target='#carouselExampleIndicators'
                data-slide-to='1'
              ></li>
              <li
                data-target='#carouselExampleIndicators'
                data-slide-to='2'
              ></li>
            </ol>
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseList;
