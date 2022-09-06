import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_MODULE } from "../../utils/queries";
// import { QUERY_MODULES } from "../../utils/queries";
import LectureList from "../LectActList/lecture";
import { useParams } from "react-router-dom";

const LectureSection = (props) => {
  const { moduleId } = useParams();
  // console.log(courseId);
  const { loading, error, data } = useQuery(QUERY_SINGLE_MODULE, {
    variables: { moduleId: moduleId },
  });

  if (error) return `Error! ${error.message}`;
  // console.log(data);
  const lectures = data?.module.lecture || [];
  return (
    <section>
      {" "}
      <div>
        
        {loading ? <div>Loading...</div> :  <LectureList lectures={lectures} />}
  
      </div>
    </section>
  );
};

export default LectureSection;
