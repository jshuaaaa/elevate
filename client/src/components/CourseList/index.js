import React from "react";
import { Link } from "react-router-dom";

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

  // console.log(shuffledPosts);

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
            <h4 className='card-header bg-primary text-light p-2 m-0'>
              <Link className='text-light' to={`/courses/${course._id}`}>
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
            <div class='carousel-inner'>
              <div class='carousel-item active'>
                <img class='d-block w-100' src='...' alt='First slide' />
              </div>
              <div class='carousel-item'>
                <img class='d-block w-100' src='...' alt='Second slide' />
              </div>
              <div class='carousel-item'>
                <img class='d-block w-100' src='...' alt='Third slide' />
              </div>
            </div>
            <a
              class='carousel-control-prev'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='prev'
            >
              <span
                class='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span class='sr-only'>Previous</span>
            </a>
            <a
              class='carousel-control-next'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='next'
            >
              <span
                class='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span class='sr-only'>Next</span>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseList;
