import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_LECTURE } from "../../utils/queries";
import { Link } from "react-router-dom";

const LectureName = (props) => {
  const { loading, error, data } = useQuery(QUERY_SINGLE_LECTURE, {
    variables: { lectureId: props.lectureId },
  });

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;
  // console.log(data);
  const lecture = data?.lecture || [];
  console.log(lecture);

  return (
    <>

      <li>
      <h4 className='card-header courseH'>
        {lecture.name}
      </h4>

      <iframe src={lecture.url}></iframe>
      </li>
      
    </>
  );
};

export default LectureName;
