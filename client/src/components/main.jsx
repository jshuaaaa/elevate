import React from 'react'
import videoBg from '../assets/education.mp4'
import '../components/styles/main.css'

import CourseSection from '../components/CourseSection'
import searchicon from '../assets/searchicon.png'

import SearchBar from './SearchBar';



const Home = () => {
 
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
    
       <CourseSection/>
    </div>
    
  )
}

export default Home