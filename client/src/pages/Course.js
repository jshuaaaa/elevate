import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_COURSE_PAGE } from "../utils/queries";
// import { ADD_COURSE, ADD_MODULE_TO_COURSE, ADD_REVIEW } from "../utils/mutations";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import ModuleModal from "../components/ModuleModal";
import ActivityForm from "../components/ActivityForm";
import Auth from "../utils/auth";
import { Button } from "react-bootstrap";

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

  const [openAddActivity, setOpenAddActivity] = useState(false);

  // pass URL parameter
  const course = data?.coursePage || {};
  console.log(courseId);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='my-3'>
      <h3 className='card-header bg-dark text-light p-2 m-0'>{course.name}</h3>
      <div className='card-body bg-light p-4'>
        <p>Course Summary: {course.description}</p>
        <p>${course.price}</p>
        <p>Category: {course.category}</p>
      </div>

      {/* {Auth.loggedIn() && ( */}
      <Button variant='primary' onClick={handleModuleShow}>
        Add Module
      </Button>
      <ModuleModal
        course={courseId}
        show={showModule}
        onHide={handleModuleClose}
        backdrop='static'
        keyboard={false}
      />
      <Button variant='primary' onClick={() => setOpenAddActivity(true)}>
        Add Activity
      </Button>
      <ActivityForm
        show={openAddActivity}
        onClick={() => setOpenAddActivity(false)}
      />
      {/* )} */}

      <h2 className='card-header bg-dark text-light p-2 m-0'>Reviews</h2>
      <div className='bg-light p-4'>
        <ReviewList reviews={course.reviews} />
      </div>
      <div className='m-3 p-4' style={{ border: "1px dotted #1a1a1a" }}>
        <ReviewForm reviewId={course._id} />
      </div>
    </div>
  );
}

export default Course;
