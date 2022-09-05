import React from "react";
import { Link } from "react-router-dom";
import ActivityName from "../LectActName/activity";
// need to query for activity name

const ActivityList = ({ activities }) => {
  if (!activities.length) {
    return <h3>No activities yet</h3>;
  }

  return (
    <>
      {activities.map((activity) => (
        <div key={activity._id} className='container'>
          {/* Query for activity name */}
          <ActivityName activityId={activity._id} />
          <div className='bg-light p-2'>
            <p className=''>Activity: {activity.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ActivityList;
