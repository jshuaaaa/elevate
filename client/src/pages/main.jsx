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
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Login</a></li>
            <li><a className="smoothscroll" href="#about">SignUp</a></li>
         </ul>
      </nav>
   </div>

        </div>
    </div>
  )
}

export default video