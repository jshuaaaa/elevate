import React from "react";
import { useQuery } from '@apollo/client';
import CourseList from '../CourseList'
import { QUERY_COURSES } from '../../utils/queries'


const CourseSection = () => {
    const { loading, data } = useQuery(QUERY_COURSES);
    const courses = data?.courses || [];
    return (
      
  <section> <div className="courseMain">
    
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