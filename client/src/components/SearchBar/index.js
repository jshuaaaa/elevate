import React, {useState, useContext, createContext, useEffect} from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import searchicon from '../../assets/searchicon.png'
export const SearchContext = createContext()
let result = false
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
      
      <div className="container mt-4"> 
      <div className="row d-flex justify-content-center"> 
        <div className="col-md-9"> 
          <div className="card p-4 mt-3"> 
          
            <h3 className="heading mt-5 text-center">Search Courses Here!</h3> 
            <div className="d-flex justify-content-center px-5"> 
              <div className="search"> 
                <input             onChange={handleSearchResult}
                  type="text"
                  id="header-search"
                  className="search-input"
                  placeholder="Search Courses"
                  name="s"  /> 
                
                <Link className="iconS" to={`course/search/${name}`}><a href="#" className="search-icon">   <img src={searchicon}/> </a> </Link>
                
              </div> 
            </div> 
            <div className="row mt-4 g-1 px-4 mb-5"> 
              <div className="col-md-2"> 
                <div className="card-inner p-3 d-flex flex-column align-items-center"> 
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png?20110615130507" width={50} /> 
                  <div className="text-center mg-text"> 
                    <span className="mg-text">Music Courses</span> 
                  </div> 
                </div> 
              </div> 
              <div className="col-md-2">
                <div className="card-inner p-3 d-flex flex-column align-items-center"> 
                  <img src="https://cdn-icons-png.flaticon.com/512/268/268998.png" width={50} /> 
                  <div className="text-center mg-text"> 
                    <span className="mg-text">Coding Courses</span> 
                  </div> 
                </div> 
              </div> 
              <div className="col-md-2"> 
                <div className="card-inner p-3 d-flex flex-column align-items-center"> 
                  <img src="https://cdn-icons-png.flaticon.com/512/3159/3159310.png" width={50} /> 
                  <div className="text-center mg-text"> 
                    <span className="mg-text">Design Courses</span> 
                  </div> 
                </div> 
              </div> 
              <div className="col-md-2"> 
                <div className="card-inner p-3 d-flex flex-column align-items-center"> 
                  <img src="https://icones.pro/wp-content/uploads/2021/04/icone-de-nourriture-noire-symbole-png.png" width={50} /> 
                  <div className="text-center mg-text"> 
                    <span className="mg-text">Food Courses</span> 
                  </div> 
                </div> 
              </div> 
              <div className="col-md-2"> 
                <div className="card-inner p-3 d-flex flex-column align-items-center"> 
                  <img src="https://cdn-icons-png.flaticon.com/512/2234/2234665.png" width={50} /> 
                  <div className="text-center mg-text"> 
                    <span className="mg-text">History Courses</span> 
                  </div> 
                </div> 
              </div> 
              <div className="col-md-2"> 
                <div className="card-inner p-3 d-flex flex-column align-items-center"> 
                  <img src="https://static.thenounproject.com/png/1051526-200.png" width={50} /> 
                  <div className="text-center mg-text"> 
                    <span className="mg-text">Math Courses</span> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div>
        </div> 
      </div> 
      </div>

    
    )
    
    }

export default SearchBar
