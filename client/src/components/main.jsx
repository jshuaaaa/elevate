import React from 'react'
import videoBg from '../assets/education.mp4'
import '../components/styles/main.css'
import { useQuery } from '@apollo/client';
import CourseList from '../components/CourseList'
import { QUERY_COURSES } from '../utils/queries'
import SearchBar from './SearchBar';


const Home = () => {
  const { loading, data } = useQuery(QUERY_COURSES);
  const courses = data?.courses || [];
  return (
    <div className='main flex' id='home'>
      
        <video className='video2' src={videoBg} autoPlay loop muted />
        <div className=" sizeM">
        <div className="row banner">
      
      <div className="banner-text">
<SearchBar />
     
         
        
         
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