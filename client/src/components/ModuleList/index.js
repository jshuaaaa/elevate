import React from "react";
import { Link } from "react-router-dom";
import ModuleName from "../ModuleName";

const ModuleList = ({ modules }) => {
  if (!modules.length) {
    return <h3>No modules yet</h3>;
  }

  return (
    <ol>
      {modules.map((module) => (
        <li>
          <div key={module._id} className='container'>
            {/* Query for module name */}
            <ModuleName moduleId={module._id} />
            {/* 
            <div className=' p-2 CModSec'>
              <p className=''>Lecture: {module.lecture}</p>
              <p className=''>Activity: {module.activity}</p>
            </div> */}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default ModuleList;
