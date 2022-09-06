import React from "react";
import { QUERY_REVIEWS } from "../../utils/queries";
import QueryReview from "./queryReview";

const ReviewList = ({reviews}) => {
  console.log(reviews)
  if (!reviews) {
    return <h3>No reviews Yet</h3>;
  }
  console.log(reviews)
  return (
    <>
      <h3
        className='p-5 display-inline-block'
        style={{ borderBottom: "1px dotted #1a1a1a" }}
      >
        Reviews
      </h3>
      <div className='flex-row my-4'>
          {reviews.map((review) => (
            <div key={review._id} className='col-12 mb-3 pb-3'>
              <div className='p-3 bg-dark text-light'>
                <QueryReview reviewId={review._id}/>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ReviewList;
