import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_ACTIVITY } from "../../utils/queries";
import { Link } from "react-router-dom";

const ActivityName = (props) => {
  const { loading, error, data } = useQuery(QUERY_SINGLE_ACTIVITY, {
    variables: { activityId: props.activityId },
  });

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;
  // console.log(data);
  const activity = data?.activity || [];
  console.log(activity);
  
  return (
    <>
      <h4 className='card-header'>
        {activity.name}
      </h4>
    </>
  );
};

export default ActivityName;
