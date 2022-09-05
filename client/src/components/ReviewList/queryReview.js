import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_REVIEW } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const QueryReview = (props) => {
  const { loading, error, data } = useQuery(QUERY_SINGLE_REVIEW, {
    variables: { reviewId: props.reviewId },
  });

  if (error) return `Error! ${error.message}`;
  // console.log(data);
  const review = data?.review || [];
  console.log(module);

  return (
    <>
        <h2>
        {review.reviewAuthor}
        </h2>
        <p>
          {review.reviewText}
        </p>

    </>
  );
};

export default QueryReview;
