import React from "react";
import { Link } from "react-router-dom";
import LectureName from "../LectActName/lecture";
// need to query for lecture name

const LectureList = ({ lectures }) => {
  if (!lectures.length) {
    return <h3>No lectures yet</h3>;
  }

  return ( <ol>
    <>
      {lectures.map((lecture) => (
        <div key={lecture._id} className='container'>
          {/* <h4 className='card-header bg-info p-1'>View {lecture.name}</h4> */}
          <LectureName lectureId={lecture._id} />
          <div className=''>
            <p className=''>Description: {lecture.description}</p>
          </div>
        </div>
      ))}
    </>
    </ol>
  );
};

export default LectureList;
