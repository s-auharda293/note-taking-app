/* eslint-disable react/prop-types */
// import { useState } from "react";

import { useEffect } from "react";

export const SearchBar = ({notes,setSearchNotes,searchText,setSearchText}) => {


  useEffect(()=>{
    if(searchText.length>0){

      const searchedNotes=notes.filter((note)=>{
        return note.content.trim().split(' ').join('').toLowerCase().includes(searchText.trim().split(' ').join('').toLowerCase())
      })
      
      setSearchNotes(searchedNotes)
    }
  },[searchText,notes,setSearchNotes])

  const handleSearch=(e)=>{
    e.preventDefault();
    setSearchText(e.target.value);
}
  
  return (
    <div className="search-bar">
      <div className="input-group mb-3">
        <button className="btn" type="button" id="button-addon1">
          <ion-icon name="search-outline"></ion-icon>
        </button>
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          value={searchText}
          onChange={handleSearch}
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
