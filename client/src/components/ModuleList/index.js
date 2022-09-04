import React from "react";
import { Link } from "react-router-dom";

// need to query for module name

const ModuleList = ({ modules }) => {
  if (!modules.length) {
    return <h3>No modules yet</h3>;
  }

  return (
    <>
      {modules.map((module) => (
        <div key={module._id} className='container'>
          <h4 className='card-header bg-info'>
            <Link className='text-primary' to={`/module/${module._id}`}>
              Click to view {module.name}
            </Link>
          </h4>
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
