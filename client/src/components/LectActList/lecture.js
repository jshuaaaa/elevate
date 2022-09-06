import React from "react";
import { Link } from "react-router-dom";
import LectureName from "../LectActName/lecture";
// need to query for lecture name

const LectureList = ({ lectures }) => {
  if (!lectures.length) {
    return <h3>No lectures yet</h3>;
  }

  return (
      <ol>
    <>
      {lectures.map((lecture) => (
        <li>
        <div key={lecture._id} className='container'>
          {/* <h4 className='card-header bg-info p-1'>View {lecture.name}</h4> */}
          <p><LectureName lectureId={lecture._id} /></p>
          
            <p>Description: <em>{lecture.description}</em></p>
          
        </div>
        </li>
      ))}
    </>
    </ol>
  );
};

export default LectureList;
