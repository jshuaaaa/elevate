import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_COURSE_MODULES } from "../../utils/queries";
// import { QUERY_MODULES } from "../../utils/queries";
import ModuleList from "../ModuleList";
import { useParams } from "react-router-dom";

const ModuleSection = (props) => {
  const { courseId } = useParams();
  // console.log(courseId);
  const { loading, error, data } = useQuery(QUERY_COURSE_MODULES, {
    variables: { courseId: courseId },
  });

  if (error) return `Error! ${error.message}`;
  // console.log(data);
  const modules = data?.course.module || [];
  console.log(modules);
  return (
    <section>
      {" "}
      <div>
        {loading ? <div>Loading...</div> : <ModuleList modules={modules} />}
      </div>
    </section>
  );
};

export default ModuleSection;
