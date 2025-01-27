/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Main from "./MainSection";

const todayDate = new Date();
const day = todayDate.getDate();
const month = todayDate.getMonth() + 1;
const year = todayDate.getFullYear();

let Notes = [];

const App = () => {
  
  const retrievedNotes=JSON.parse(localStorage.getItem('notes'));
  const retrievedColorOption=JSON.parse(localStorage.getItem('showColorButtons'));
  
  const [showColorButtons, setShowColorButtons] = useState(retrievedColorOption);
  const [notes, setNotes] = useState(retrievedNotes);

  const handleShowColorButtons = () => {
    setShowColorButtons((colorButtons) => !colorButtons);
  };

  const handleHoldColor = (e) => {
    const selectedColor = e.target.className.split(" ")[1];
    // console.log(selectedColor);

    const newNote = {
      id: crypto.randomUUID(),
      content: "This is a note. Please click on edit button to edit your note and save changes!",
      date: `${month}/${day}/${year}`,
      color: `${selectedColor}`,
    };

    Notes = [...Notes, newNote];
    setNotes((notes) => [...notes, newNote]);

    // <Note />;
  };

  const handleEditNote = (id, editModalInput) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, content: editModalInput } : note
    );
    setNotes(updatedNotes);
  };

  const handleDeleteNote = (id) => {
    return setNotes((notes) =>
      notes.filter((note) => {
        return note.id !== id;
      })
    );
  };

  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('showColorButtons',JSON.stringify(showColorButtons));
  
  },[notes,showColorButtons])

  return (
    <>
      <div className="center-container">
        <SideBar
          showColorButtons={showColorButtons}
          onClickShowColorButtons={handleShowColorButtons}
          onHoldColor={handleHoldColor}
        />
        <Main
          notes={notes}
          setNotes={setNotes}
          onDeleteNote={handleDeleteNote}
          onEditNote={handleEditNote}
        />
      </div>
    </>
  );
};

export default App;
