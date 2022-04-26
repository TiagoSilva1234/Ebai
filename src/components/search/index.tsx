import React from 'react';
import "./index.css"
const Search = ({placeholder,data})=>{

    return <div className="search">
        <div className="searchInputs">
        <input className="input" type="text" placeholder={placeholder}/>
        <div className="searchIcon"></div>
        </div>
        <div className="dataResult"></div>
    
    </div>

}
export default Search;