import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_MODULE } from "../../utils/queries";
// import { QUERY_MODULES } from "../../utils/queries";
import ActivityList from "../LectActList/activity";
import { useParams } from "react-router-dom";

const ActivitySection = (props) => {
  const { moduleId } = useParams();
  // console.log(courseId);
  const { loading, error, data } = useQuery(QUERY_SINGLE_MODULE, {
    variables: { moduleId: moduleId },
  });

  if (error) return `Error! ${error.message}`;
  // console.log(data);
  const activities = data?.module.activity || [];
  return (
    <section>
      {" "}
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ActivityList activities={activities} />
        )}
      </div>
    </section>
  );
};

export default ActivitySection;
