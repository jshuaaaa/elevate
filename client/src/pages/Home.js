import React from "react";
import { useQuery } from "@apollo/client";

import ProfileList from "../components/ProfileList";

// import { QUERY_SINGLE_PROFILE } from "../utils/queries";
import { QUERY_COURSES } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_COURSES);
  const courses = data?.courses || [];

  return (
    <main>
      <div className='flex-row justify-center'>
        Something here
        <div className='col-12 col-md-10 my-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              courses={courses}
              title="Here's the current list of courses..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
