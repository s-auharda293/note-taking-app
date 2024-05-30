/* eslint-disable react/prop-types */
import NoteContainer from "./NoteContainer";
import SearchBar from "./SearchBar";

const Main = ({ notes, onDeleteNote, onEditNote }) => {
  return (
    <div className="main">
      <SearchBar />
      <h1 className="notes-heading">Notes</h1>
      <NoteContainer
        notes={notes}
        onDeleteNote={onDeleteNote}
        onEditNote={onEditNote}
      />
    </div>
  );
};

export default Main;
