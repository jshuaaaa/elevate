import React from 'react'
import videoBg from '../assets/education.mp4'
import searchbar from './searchbar'



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
      
   </div>

        </div>
    </div>
  )
}

export default video