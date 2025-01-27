/* eslint-disable react/prop-types */
import NoteContainer from "./NoteContainer";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Main = ({ notes, onDeleteNote, onEditNote ,setNotes}) => {
  
  const [searchNote, setSearchNotes]=useState([]);
  const [searchText,setSearchText]=useState('');

  return (
    <div className="main">
      <SearchBar notes={notes} setSearchNotes={setSearchNotes} searchText={searchText} setSearchText={setSearchText}/>
      <h1 className="notes-heading">Notes</h1>
      <NoteContainer
        notes={(searchText.length>0 && searchNote.length>0)?searchNote:notes}
        setNotes={setNotes}
        onDeleteNote={onDeleteNote}
        onEditNote={onEditNote}
      />
    </div>
  );
};

export default Main;
