/* eslint-disable react/prop-types */
import { useState } from "react";

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

  return (
    <>
      <div className="center-container">
        <SideBar
          showColorButtons={showColorButtons}
          onClickShowColorButtons={handleShowColorButtons}
          onHoldColor={handleHoldColor}
        />
        <Main notes={notes} />
      </div>
    </>
  );
};

const SideBar = ({
  showColorButtons,
  onClickShowColorButtons,
  onHoldColor,
}) => {
  return (
    <div className="sidebar">
      <h3>Memento</h3>
      <div className="button-container">
        <div className="top">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onClickShowColorButtons}
          >
            +
          </button>
        </div>
        {showColorButtons ? (
          <div className="bottom">
            <button
              type="button"
              className="color-btn btn-yellow"
              onClick={(e) => {
                onHoldColor(e);
              }}
            ></button>
            <button
              type="button"
              className="color-btn btn-orange"
              onClick={(e) => {
                onHoldColor(e);
              }}
            ></button>
            <button
              type="button"
              className="color-btn btn-purple"
              onClick={(e) => {
                onHoldColor(e);
              }}
            ></button>
            <button
              type="button"
              className="color-btn btn-blue"
              onClick={(e) => {
                onHoldColor(e);
              }}
            ></button>
            <button
              type="button"
              className="color-btn btn-green"
              onClick={(e) => {
                onHoldColor(e);
              }}
            ></button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const Main = ({ notes }) => {
  return (
    <div className="main">
      <SearchBar />
      <h1 className="notes-heading">Notes</h1>
      <NoteContainer notes={notes} />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="input-group mb-3">
        <button className="btn" type="button" id="button-addon1">
          <ion-icon name="search-outline"></ion-icon>
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        ></input>
      </div>
    </div>
  );
};

const NoteContainer = ({ notes }) => {
  return (
    <div className="notes-container">
      {notes.map((note) => (
        <Note
          content={note.content}
          date={note.date}
          color={note.color}
          key={note.id}
        />
      ))}
    </div>
  );
};

const Note = ({ content, date, color }) => {
  return (
    <div className={`note ${color}`}>
      <span className="note-content">{content}</span>
      <div className="note-info">
        <span className="note-date">{date}</span>
        <div className="note-buttons">
          <button
            type="button"
            className="btn edit-button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-2" id="exampleModalLabel">
                      Edit Note
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary modal-btn"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary modal-btn modal-btn-edit"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <Modal /> */}

            <ion-icon name="create-outline"></ion-icon>
          </button>
          <button type="button" className="btn delete-button">
            <ion-icon name="trash-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
