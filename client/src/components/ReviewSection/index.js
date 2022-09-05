import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_REVIEWS} from "../../utils/queries";
// import { QUERY_MODULES } from "../../utils/queries";
import ReviewList from "../ReviewList";
import { useParams } from "react-router-dom";

const ReviewSection = (props) => {
  const { courseId } = useParams();
  // console.log(courseId);
  const { loading, error, data } = useQuery(QUERY_REVIEWS, {
    variables: { courseId: courseId },
  });

  if (error) return `Error! ${error.message}`;
  // console.log(data);
  const reviews = data?.course.review || [];

  return (
    <section>
      {" "}
      <div>
        {loading ? <div>Loading...</div> : <ReviewList reviews={reviews} />}
      </div>
    </section>
  );
};

export default ModuleSection;
