import React from "react";
import { Link } from "react-router-dom";
import ActivityName from "../LectActName/activity";
// need to query for activity name

const ActivityList = ({ activities }) => {
  if (!activities.length) {
    return <h3>No activities yet</h3>;
  }

  return (
    <ol>
    <>
    
      {activities.map((activity) => (
       
         <li>
        <div key={activity._id} className='container'>
          {/* Query for activity name */}
          <h4 className='card-header courseH'><ActivityName activityId={activity._id} /></h4>
          <div className=''>
            <p className=''>Description: {activity.description}</p>
          </div>
        </div>
        </li>
        
      ))}
    </>
    </ol>
  );
};

export default ActivityList;
