import React from 'react'
import videoBg from '../assets/education.mp4'
import '../components/styles/main.css'
import { useQuery } from '@apollo/client';
import CourseList from '../components/CourseList'
import { QUERY_COURSES } from '../utils/queries'


const Home = () => {
  const { loading, data } = useQuery(QUERY_COURSES);
  const courses = data?.courses || [];
  return (
    <div className='main' id='home'>
      
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
        <div className="row banner">
      
      <div className="banner-text">
      <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Courses</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
     
         
         <hr />
         
      </div>
      
   </div>
   <div className="col-12 col-md-8 mb-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CourseList
            courses={courses}
            title="Some Featured Courses..." />
        )}
            </div>
        </div>
    </div>
  )
}

export default Home