import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_COURSE_PAGE } from "../utils/queries";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import ModuleModal from "../components/ModuleModal";
import "../components/styles/course.css";
import Auth from "../utils/auth";
import { Button } from "react-bootstrap";
import ModuleSection from "../components/ModuleSection";

function Course() {
  // need to add code for if user is logged in to show if they are registered for course or added course
  const { courseId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_COURSE_PAGE, {
    variables: { courseId: courseId },
  });

  //for modal
  const [showModule, setShowModule] = useState(false);
  const handleModuleClose = () => setShowModule(false);
  const handleModuleShow = () => setShowModule(true);
  // console.log(data);
  // pass URL parameter
  const course = data?.course || {};
  // console.log(courseId);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main className='d-flex-row justify-center logBack '>
      <div className='dCourse logE containerr cBack card-text courseEm'>
        <div className='logC LogE createC d-flex-column'>
          <h2 className='card-header bg-dark p-2 m-0 cHed'>
            Course title: {course.name}
          </h2>
          <div className='card-body p-5 corCard'>
            <p><u>Course Summary:</u> <p>{course.description}</p></p>
            {/* <p>${course.price}</p> */}
            <p><u>Category:</u> <p>{course.category}</p></p>
            <p className='text-secondary'> <u>Created by:</u> <p>{course.courseAuthor}</p></p>
          </div>

         
          <div className='logC LogE createC d-flex-column'>
            <h2 className='card-header bg-dark text-light p-2 m-0 cHed'>
              Modules
            </h2>
            <div className='card-body p-5 corCard bCor'>
              <ModuleSection modules={course.module} />
              {Auth.loggedIn() && (
            <>
              <div className='d-flex justify-content-center aCBut'>
                <Button variant='primary' onClick={handleModuleShow}>
                  Add Module
                </Button>
                <ModuleModal
                  course={courseId}
                  show={showModule}
                  onHide={handleModuleClose}
                  onSubmit={handleModuleClose}
                  backdrop='static'
                  keyboard={false}
                />
              </div>
            </>
          )}
            </div>
          </div>

          <div className='logC LogE createC d-flex-column'>
            <h2 className='card-header bg-dark text-light p-2 m-0 cHed'>
              Reviews
            </h2>
            <div className=' card-body p-5 corCard bCor'>
              <ReviewList reviews={course.review} />
            </div>
          </div>

          <div className='reviewBG'>
            <div
              className='d-flex justify-content-center m-3 p-4'
              style={{ border: "1px dotted #1a1a1a" }}
            >
              <ReviewForm courseId={courseId} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Course;
