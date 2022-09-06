import React from "react";
import { Link } from "react-router-dom";
import CourseName from "./courseName";
import { motion } from "framer-motion";
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
            className='card mb-3 cardo'
            style={{ width: "25rem", height: "20rem" }}
          >
            {/* <h4 className='card-header bg-primary text-light p-2 m-0'>
            </h4> */}
            <motion.div
           whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
            whileTap={{ scale: 1.0 }}
          
            className='card-body bg-light p-2 fcCard'>
            <Link className='text-light' to={`/courses/${course._id}`}>
              <CourseName courseId={course._id} />
            </Link>

              <p className='card-text'>Category: {course.category}</p>
              {/* <p className='card-text'>${course.price}</p> */}
              <Link className='btn btn-primary' to={`/courses/${course._id}`}>
                View course
              </Link>
              {/* <Link className='btn btn-primary' to={`/courses/${course._id}`}>
                Register
              </Link> */}
            </motion.div>
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
