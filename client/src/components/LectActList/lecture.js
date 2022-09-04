import React from "react";
import { Link } from "react-router-dom";
// need to query for lecture name

const LectureList = ({ lectures }) => {
  if (!lectures.length) {
    return <h3>No lectures yet</h3>;
  }

  return (
    <>
      {lectures.map((lecture) => (
        <div key={lecture._id} className='container'>
          <h4 className='card-header bg-info p-1'>View {lecture.name}</h4>
          <div className='bg-light p-2'>
            <p className=''>Lecture: {lecture.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default LectureList;
