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
    <div className='main flex' id='home'>
      
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
        <div className="row banner">
      
      <div className="banner-text">
      <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Courses</span>
        </label>
        <input class="form-control-lg"
            type="text"
            id="header-search"
            placeholder="Search Courses"
            name="s" 
        />
        <button type="submit" className="btn btn-primary btn-lg" >Search</button>
    </form>
     
         
         <hr />
         
      </div>
      
   </div>
   <div className="row flex">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CourseList
            courses={courses}
            title="Featured Courses" />
        )}
            </div>
        </div>
    </div>
  )
}

export default Home