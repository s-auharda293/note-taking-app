/* eslint-disable react/prop-types */
import Note from "./Note";

const NoteContainer = ({ notes,
  onDeleteNote, onEditNote }) => {

  return (
    <div className="notes-container">
      {notes.map((note) => (
        <Note
          content={note.content}
          date={note.date}
          color={note.color}
          key={note.id}
          onDeleteNote={onDeleteNote}
          id={note.id}
          onEditNote={onEditNote}
        />
      ))}
    </div>
  );
};

export default NoteContainer;
