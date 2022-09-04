import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_MODULE } from "../utils/queries";
import Auth from "../utils/auth";
import { Button } from "react-bootstrap";
import ActivityModal from "../components/LectActModal/activity";
import LectureModal from "../components/LectActModal/lecture";
import LectureSection from "../components/LectActSection/lecture";
import ActivitySection from "../components/LectActSection/activity";

function Module() {
  // need to add code for if user is logged in to show if they are registered for module or added module
  const { moduleId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_MODULE, {
    variables: { moduleId: moduleId },
  });

  //Lecture modal
  const [showLecture, setShowLecture] = useState(false);
  const handleLectureClose = () => setShowLecture(false);
  const handleLectureShow = () => setShowLecture(true);

  //Activity modal
  const [showActivity, setShowActivity] = useState(false);
  const handleActivityClose = () => setShowActivity(false);
  const handleActivityShow = () => setShowActivity(true);

  // pass URL parameter
  const module = data?.module || {};
  // console.log(moduleId);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='container my-5'>
      <h2 className='bg-dark text-light p-2 m-0'>Module: {module.name}</h2>
      <div className='card-body bg-light p-4'>
        <h4>Summary: {module.description}</h4>
      </div>

      {Auth.loggedIn() && (
        <>
          <Button variant='warning' onClick={handleLectureShow}>
            Add Lecture
          </Button>
          <LectureModal
            module={moduleId}
            show={showLecture}
            onHide={handleLectureClose}
            onSubmit={handleLectureClose}
            backdrop='static'
            keyboard={false}
          />
          <Button variant='warning' onClick={handleActivityShow}>
            Add Activity
          </Button>
          <ActivityModal
            module={moduleId}
            show={showActivity}
            onHide={handleActivityClose}
            onSubmit={handleActivityClose}
            backdrop='static'
            keyboard={false}
          />
        </>
      )}

      <h2 className='card-header bg-dark text-light p-2 m-0'>Lectures</h2>
      <div className='bg-light p-4 mb-5'>
        <LectureSection lectures={module.lecture} />
      </div>
      <h2 className='card-header bg-dark text-light p-2 m-0'>Activities</h2>
      <div className='bg-light p-4 mb-5'>
        <ActivitySection activities={module.activity} />
      </div>
    </div>
  );
}

export default Module;
