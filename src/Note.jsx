/* eslint-disable react/prop-types */

import { useState } from "react";

const Note = ({ content, date, color, onDeleteNote, id, onEditNote }) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [editModalInput, setEditModalInput] = useState(content);

  const handleEditButtonClick = () => {
    setEditModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalIsOpen(false);
  };

  const handleSaveEditedNote = (e) => {
    e.preventDefault();
    onEditNote(id, editModalInput);
    handleCloseModal();
  };

  return (
    <div className={`note ${color}`}>
      <span className="note-content">{content}</span>
      <div className="note-info">
        <span className="note-date">{date}</span>
        <div className="note-buttons">
          <button
            type="button"
            className="btn edit-button"
            onClick={handleEditButtonClick}
          >
            <ion-icon name="create-outline"></ion-icon>
          </button>
          <button
            type="button"
            className="btn delete-button"
            onClick={() => onDeleteNote(id)}
          >
            <ion-icon name="trash-outline"></ion-icon>
          </button>
        </div>
      </div>

      {editModalIsOpen && (
        <div className="modal-backdrop">
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-2" id="exampleModalLabel">
                    Edit Note
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control input-height"
                    placeholder="Note Content"
                    value={editModalInput}
                    onChange={(e) => setEditModalInput(e.target.value)}
                  ></input>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary modal-btn"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary modal-btn modal-btn-edit"
                    onClick={handleSaveEditedNote}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
