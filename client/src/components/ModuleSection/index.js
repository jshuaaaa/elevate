import React from "react";
import { useQuery } from "@apollo/client";
import CourseList from "../CourseList";
// import { QUERY_COURSE_MODULES } from "../../utils/queries";
import { QUERY_MODULES } from "../../utils/queries";
import ModuleList from "../ModuleList";

const ModuleSection = () => {
  const { courseId } = useParams();
  const { loading, data } = useQuery(QUERY_COURSE_MODULES, {
    variables: { courseId: courseId },
  });
  // const { loading, data } = useQuery(QUERY_MODULES);
  const modules = data?.coursePage || [];
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
