import React from "react";
import { useQuery } from '@apollo/client';
import CourseList from '../CourseList'
import { QUERY_COURSES } from '../../utils/queries'


const CourseSection = () => {
    const { loading, data } = useQuery(QUERY_COURSES);
    const courses = data?.courses || [];
    return (
      
  <section> <div className="courseMain">
      <div className='logodiv'>
        <h1>ELEVATE</h1>
        <p><em>
          Here at Elevate we provide users with the opportunity to create a
          variety of courses and interact / join other courses created by
          users{" "}
          </em>
         
        </p>

      
     

       
  
      </div>
    
  {loading ? (
    <div>Loading...</div>
  ) : (

    <CourseList
      courses={courses}
      title="Featured Courses" />

  )}

  
      </div>
      
      </section>
     
    );
  };
  

  export default CourseSection;