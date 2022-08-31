import React from "react";
import { useQuery } from "@apollo/client";


import ProfileList from "../components/ProfileList";

import { QUERY_SINGLE_PROFILE } from "../utils/queries";
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






const video = () => {
  return (
    <div className='main' id='home'>
        <div className="overlay">

        </div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
        <div className="row banner">
      
      <div className="banner-text">
         
         <div id='search' className="responsive-headline">{searchbar}</div>
         
         <hr />
         
      </div>
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Login</a></li>
            <li><a className="smoothscroll" href="#about"><SignUp></SignUp></a></li>
         </ul>
      </nav>
   </div>

        </div>
    </div>
  )
}

export default video