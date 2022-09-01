import React from "react";

const ReviewList = ({ reviews = [] }) => {
  if (!reviews.length) {
    return <h3>No reviews Yet</h3>;
  }

  return (
    <>
      <h3
        className='p-5 display-inline-block'
        style={{ borderBottom: "1px dotted #1a1a1a" }}
      >
        reviews
      </h3>
      <div className='flex-row my-4'>
        {reviews &&
          reviews.map((review) => (
            <div key={review._id} className='col-12 mb-3 pb-3'>
              <div className='p-3 bg-dark text-light'>
                <h5 className='card-header'>
                  {review.reviewAuthor} reviewed{" "}
                  <span style={{ fontSize: "0.825rem" }}>
                    on {review.createdAt}
                  </span>
                </h5>
                <p className='card-body'>{review.reviewText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ReviewList;
