import React from "react";
import { Link } from "react-router-dom";

const ModuleList = ({ modules }) => {
  if (!modules.length) {
    return <h3>No modules yet</h3>;
  }

  return (
    <>
      {modules.map((module) => (
        <div key={module._id} className='container'>
          <h4 className='bg-primary text-light p-2'>{module.name}</h4>
          <div className='bg-light p-2'>
            <p className=''>Lecture: {module.lecture}</p>
            <p className=''>Activity: {module.activity}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ModuleList;
