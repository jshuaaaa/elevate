import React, { useContext } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_COURSE } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import CourseList from '../CourseList';
import SearchContext from "../SearchBar"
import SearchList from '../CourseList/searchlist';


const SearchedCourse = (props) => {
    const name = localStorage.getItem('search')
    console.log(name)
    
    const {loading, data} = useQuery(QUERY_SINGLE_COURSE, {
        variables: {name: name}
      });

    const courses = data?.courseName || []
    console.log(data)
    return(
<div className="row flex">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <SearchList
            courses={courses}
            title="Featured Courses" />
        )}
            </div>
    )
}


export default SearchedCourse