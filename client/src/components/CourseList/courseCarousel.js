import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_COURSES } from "../../utils/queries";
import CourseName from "./courseName";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CourseCarousel = () => {
  const { loading, data } = useQuery(QUERY_COURSES);
  const courses = data?.courses || [];

  // async function shuffleArray(array) {
  //   let i = array.length - 1;
  //   for (; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // }
  // const newArr = await shuffleArray(courses);

  return (
    <section className="caroCards">
      <h1>Featured Courses</h1>
      <div className='courseMain'>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {courses.slice(0, 6).map((course) => (
              <div className='cardCont'>
                <motion.div
                whileHover={{
                  scale: 1.09,
                 
                }}
                
                  key={course._id}
                  className='card cardo'
                  style={{ width: "25rem", height: "20rem" }}
                >
                  <Link className='text-light' to={`/courses/${course._id}`}>
                    <CourseName courseId={course._id} />
                  </Link>

                  <div className='card-body bg-light p-2'>
                    <p className='card-text'>Category: {course.category}</p>

                    <Link
                      className='btn btn-primary'
                      to={`/courses/${course._id}`}
                    >
                      View course
                    </Link>
                  </div>
                </motion.div>
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
        )}
      </div>
    </section>
  );
};

export default CourseCarousel;
