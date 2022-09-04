import React from "react";
import { Link } from "react-router-dom";
// need to query for activity name

const ActivityList = ({ activities }) => {
  if (!activities.length) {
    return <h3>No activities yet</h3>;
  }

  return (
    <>
      {activities.map((activity) => (
        <div key={activity._id} className='container'>
          <h4 className='card-header bg-primary text-light p-2 m-0'>
            Activity name: {activity.name}
          </h4>
          <div className='bg-light p-2'>
            <p className=''>Description: {activity.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ActivityList;
