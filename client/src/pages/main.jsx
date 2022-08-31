import React from 'react'
import videoBg from '../assets/education.mp4'
import searchbar from './searchbar'
import { useQuery } from '@apollo/client';
import CourseList from '../components/CourseList'
import { QUERY_COURSES } from '../utils/queries'

const Video = () => {
  const { loading, data } = useQuery(QUERY_COURSES);
  const courses = data?.courses || [];
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
  )
}

export default Video