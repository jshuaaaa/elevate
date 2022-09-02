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