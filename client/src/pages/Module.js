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
    <main className='d-flex-row justify-center logBack '>
      <div className='dCourse logE containerr cBack card-text courseEm'>
      <div className='logC LogE createC container
       d-flex-column'>
      <h2 className='card-header bg-dark text-light p-2 m-0 cHed'>Module: {module.name}</h2>
      <div className='card-body p-5 corCard bCor'>
        <h4>Summary: {module.description}</h4>
        
      </div>

      

       
<div className='logC LogE createC d-flex-column'>
      <h2 className='card-header bg-dark text-light p-2 m-0 cHed'>Lectures</h2>
      <div className='card-body p-5 corCard bCor'>
        <LectureSection lectures={module.lecture} />
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
          </>)}
      </div>
      
      <div className='logC LogE createC d-flex-column'></div>
      <h2 className='card-header bg-dark text-light p-2 m-0 cHed'>Activities</h2>
      <div className='card-body p-5 corCard bCor'>
        <ActivitySection activities={module.activity} />
        {Auth.loggedIn() && (
        <>
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
      </div>
      
    </div>
    </div>
    </div>
    
    </main>
  );
}

export default Module;
