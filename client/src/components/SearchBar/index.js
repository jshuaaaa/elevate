import React, {useState, useContext, createContext, useEffect} from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
let result = false
export const SearchContext = createContext()
const SearchBar = () => {

  const [name, changeSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState(result = [])

    
      async function handleSearchResult(e) {

        const {value} = e.target
        console.log(value)
        localStorage.setItem('search', value)
        changeSearchQuery(value)
        console.log(name)
      }

      async function handleSearchInput(e) {
        e.preventDefault(e)
    

      }

    return(
      
        <form>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Courses</span>
        </label>
        <input className="form-control-lg"
            onChange={handleSearchResult}
            type="text"
            id="header-search"
            placeholder="Search Courses"
            name="s" 
        />
        <Link to={`course/search/${name}`}><button type="submit" className="btn btn-primary btn-lg" >Search</button></Link>
        
    </form>

    
    )
    
    }

export default SearchBar

{/* <div className="container mt-4"> 
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
</div> */}