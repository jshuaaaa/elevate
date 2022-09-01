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
      
        <video className='video2' src={videoBg} autoPlay loop muted />
        <div className=" sizeM">
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
     
         
        
         
      </div>
      
   </div>
   
        </div>
        <div className="courseMain">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CourseList
            courses={courses}
            title="Featured Courses" />
        )}
            </div>
       
    </div>
    
  )
}

export default Home