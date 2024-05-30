/* eslint-disable react/prop-types */
import { useState } from "react";
import SideBar from "./SideBar";
import Main from "./MainSection";

const todayDate = new Date();
const day = todayDate.getDate();
const month = todayDate.getMonth() + 1;
const year = todayDate.getFullYear();

let Notes = [];

const App = () => {
  const [showColorButtons, setShowColorButtons] = useState(false);
  const [notes, setNotes] = useState(Notes);

  const handleShowColorButtons = () => {
    setShowColorButtons((colorButtons) => !colorButtons);
  };

  const handleHoldColor = (e) => {
    const selectedColor = e.target.className.split(" ")[1];
    console.log(selectedColor);

    const newNote = {
      id: crypto.randomUUID(),
      content: "This is a note.",
      date: `${month}/${day}/${year}`,
      color: `${selectedColor}`,
    };

    Notes = [...Notes, newNote];
    setNotes((notes) => [...notes, newNote]);

    // <Note />;
  };

  const handleDeleteNote = (id) => {
    return setNotes((notes) =>
      notes.filter((note) => {
        return note.id !== id;
      })
    );
  };

  return (
    <>
      <div className="center-container">
        <SideBar
          showColorButtons={showColorButtons}
          onClickShowColorButtons={handleShowColorButtons}
          onHoldColor={handleHoldColor}
        />
        <Main notes={notes} onDeleteNote={handleDeleteNote} />
      </div>
    </>
  );
};

export default App;
