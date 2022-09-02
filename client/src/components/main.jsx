import React from 'react'
import videoBg from '../assets/education.mp4'
import '../components/styles/main.css'
import { useQuery } from '@apollo/client';
import CourseList from '../components/CourseList'
import { QUERY_COURSES } from '../utils/queries'
import searchicon from '../assets/searchicon.png'


const Home = () => {
  const { loading, data } = useQuery(QUERY_COURSES);
  const courses = data?.courses || [];
  return (
    <div className='main flex' id='home'>
      
        <video className='video2' src={videoBg} autoPlay loop muted />
        <div className=" sizeM">
        <div className="row banner">
      
      <div className="banner-text">
      <div className="container mt-4"> 
        <div className="row d-flex justify-content-center"> 
          <div className="col-md-9"> 
            <div className="card p-4 mt-3"> 
              <h3 className="heading mt-5 text-center">Search Courses Here!</h3> 
              <div className="d-flex justify-content-center px-5"> 
                <div className="search"> 
                  <input type="text" className="search-input" placeholder="Search..." name /> 
                 
                  <a href="#" className="search-icon">   <img src={searchicon}/> </a> 
                  
                </div> 
              </div> 
              <div className="row mt-4 g-1 px-4 mb-5"> 
                <div className="col-md-2"> 
                  <div className="card-inner p-3 d-flex flex-column align-items-center"> 
                    <img src="https://i.imgur.com/Mb8kaPV.png" width={50} /> 
                    <div className="text-center mg-text"> 
                      <span className="mg-text">Account</span> 
                    </div> 
                  </div> 
                </div> 
                <div className="col-md-2">
                  <div className="card-inner p-3 d-flex flex-column align-items-center"> 
                    <img src="https://i.imgur.com/ueLEPGq.png" width={50} /> 
                    <div className="text-center mg-text"> 
                      <span className="mg-text">Payments</span> 
                    </div> 
                  </div> 
                </div> 
                <div className="col-md-2"> 
                  <div className="card-inner p-3 d-flex flex-column align-items-center"> 
                    <img src="https://i.imgur.com/tmqv0Eq.png" width={50} /> 
                    <div className="text-center mg-text"> 
                      <span className="mg-text">Delivery</span> 
                    </div> 
                  </div> 
                </div> 
                <div className="col-md-2"> 
                  <div className="card-inner p-3 d-flex flex-column align-items-center"> 
                    <img src="https://i.imgur.com/D0Sm15i.png" width={50} /> 
                    <div className="text-center mg-text"> 
                      <span className="mg-text">Product</span> 
                    </div> 
                  </div> 
                </div> 
                <div className="col-md-2"> 
                  <div className="card-inner p-3 d-flex flex-column align-items-center"> 
                    <img src="https://i.imgur.com/Z7BJ8Po.png" width={50} /> 
                    <div className="text-center mg-text"> 
                      <span className="mg-text">Return</span> 
                    </div> 
                  </div> 
                </div> 
                <div className="col-md-2"> 
                  <div className="card-inner p-3 d-flex flex-column align-items-center"> 
                    <img src="https://i.imgur.com/YLsQrn3.png" width={50} /> 
                    <div className="text-center mg-text"> 
                      <span className="mg-text">Guarantee</span> 
                    </div> 
                  </div> 
                </div> 
              </div> 
            </div>
          </div> 
        </div> 
      </div>
     
         
        
         
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